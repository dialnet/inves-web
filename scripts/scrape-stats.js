import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';
import 'dotenv/config';

const USER = process.env.SCRAPE_USER;
const PASS = process.env.SCRAPE_PASS;
const URL_TO_SCRAPE = process.env.SCRAPE_URL || 'https://inv-es.portalcientifico.es/';
const OUTPUT_FILE = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/data/stats.json');

async function fetchWithRetry(url, options, retries = 3, backoff = 5000) {
  for (let i = 0; i < retries; i++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout

      const response = await fetch(url, { ...options, signal: controller.signal });
      clearTimeout(timeoutId);

      if (response.ok) return response;
      
      console.warn(`Attempt ${i + 1} failed with status ${response.status}.`);
      if (response.status < 500) return response; // Don't retry on 4xx errors
      
    } catch (err) {
      console.warn(`Attempt ${i + 1} failed with error: ${err.message}.`);
      if (i === retries - 1) throw err;
    }
    
    const waitTime = backoff * (i + 1);
    console.log(`Waiting ${waitTime}ms before next attempt...`);
    await new Promise(resolve => setTimeout(resolve, waitTime));
  }
}

async function scrapeStats() {
  console.log(`Connecting to ${URL_TO_SCRAPE}...`);

  try {
    const response = await fetchWithRetry(URL_TO_SCRAPE, {
      headers: {
        'Authorization': 'Basic ' + Buffer.from(USER + ':' + PASS).toString('base64'),
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    const stats = {
      universities: "0",
      researchers: "0",
      groups: "0",
      publications: "0",
      openAccess: "0"
    };

    $('.index-contadores__contador').each((i, el) => {
      const val = $(el).find('.index-contadores__contador-valor').text().trim();
      const title = $(el).find('.index-contadores__contador-titulo').text().trim().toLowerCase();

      if (title.includes('investigadores')) {
        stats.researchers = val;
      } else if (title.includes('universidades')) {
        stats.universities = val;
      } else if (title.includes('grupos')) {
        stats.groups = val;
      } else if (title.includes('publicaciones')) {
        stats.publications = val;
      } else if (title.includes('acceso abierto')) {
        stats.openAccess = val;
      }
    });

    console.log('Scraped data:', stats);

    await fs.writeFile(OUTPUT_FILE, JSON.stringify(stats, null, 4));
    console.log(`Updated ${OUTPUT_FILE}`);

  } catch (error) {
    console.error('Scraping failed final attempt:', error);
    process.exit(1);
  }
}

scrapeStats();

