import{c as s,j as e}from"./createLucideIcon.C9iPo4qC.js";import{r as o}from"./index.BGzeIQFi.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],i=s("external-link",c);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],d=s("menu",x);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],p=s("x",h);function u({navItems:l}){const[a,n]=o.useState(!1),r=()=>n(!a);return e.jsxs("div",{className:"lg:hidden",children:[e.jsx("button",{onClick:r,className:"p-2 text-slate-600 hover:text-blue-600 transition-colors focus:outline-hidden","aria-label":a?"Cerrar menú":"Abrir menú",children:a?e.jsx(p,{className:"w-6 h-6"}):e.jsx(d,{className:"w-6 h-6"})}),a&&e.jsx("div",{className:"fixed inset-0 top-20 z-40 bg-white animate-fadeIn",children:e.jsxs("nav",{className:"container mx-auto px-4 py-8 flex flex-col space-y-2",children:[l.map(t=>e.jsxs("a",{href:t.href,target:t.external?"_blank":void 0,rel:t.external?"noopener noreferrer":void 0,onClick:()=>n(!1),className:"flex items-center justify-between px-4 py-4 text-lg font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all",children:[t.name,t.external&&e.jsx(i,{className:"w-4 h-4 ml-2 opacity-50"})]},t.href)),e.jsxs("div",{className:"pt-8 mt-8 border-t border-slate-100 px-4",children:[e.jsx("p",{className:"text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4",children:"Idioma / Language"}),e.jsxs("div",{className:"flex space-x-6",children:[e.jsx("a",{href:"/es",className:"text-lg font-bold text-slate-700 hover:text-blue-600 transition-colors",children:"ES"}),e.jsx("a",{href:"/en",className:"text-lg font-bold text-slate-700 hover:text-blue-600 transition-colors",children:"EN"})]})]})]})})]})}export{u as default};
