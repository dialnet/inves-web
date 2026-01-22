import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';
import 'dotenv/config';

const USER = process.env.SCRAPE_USER || 'dialnet';
const PASS = process.env.SCRAPE_PASS || 'dialnet';
const URL_TO_SCRAPE = process.env.SCRAPE_URL || 'https://inv-es.portalcientifico.es/';
const OUTPUT_FILE = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/data/stats.json');

async function scrapeStats() {
  console.log(`Connecting to ${URL_TO_SCRAPE}...`);

  try {
    const response = await fetch(URL_TO_SCRAPE, {
      headers: {
        'Authorization': 'Basic ' + Buffer.from(USER + ':' + PASS).toString('base64')
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
    console.error('Scraping failed:', error);
    process.exit(1);
  }
}

scrapeStats();
