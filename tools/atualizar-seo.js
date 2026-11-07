#!/usr/bin/env node
/* Atualiza o <head> do index.html (título, descrição, Open Graph, dados do Google)
   a partir do js/config.js. Rode sempre que mudar nome, endereço, telefone ou textos de SEO:
       node tools/atualizar-seo.js
   (Precisa do Node.js instalado. Se não quiser usar, o site continua funcionando —
   o JavaScript já atualiza o título da aba; só o Google fica com o texto anterior.) */
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const ctx = { window: {} }; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, "js/config.js"), "utf8"), ctx);
const C = ctx.window.SITE_CONFIG, E = C.empresa, A = C.endereco;
const q = s => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const url = E.urlSite.endsWith("/") ? E.urlSite : E.urlSite + "/";
const ld = {
  "@context": "https://schema.org", "@type": "AutoDetailing", name: E.nome, url,
  telephone: "+" + C.whatsapp.numero, image: url + "assets/og-image.png",
  address: { "@type": "PostalAddress", streetAddress: A.rua, addressLocality: A.cidade, addressRegion: A.uf, addressCountry: "BR" }
};
const block = `<!-- SEO:START (gerado por tools/atualizar-seo.js a partir de js/config.js — não edite à mão) -->
  <title>${q(E.seoTitulo)}</title>
  <meta name="description" content="${q(E.seoDescricao)}">
  <link rel="canonical" href="${url}">
  <link rel="icon" href="${q(E.favicon)}" type="${E.favicon.endsWith(".svg") ? "image/svg+xml" : "image/png"}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:site_name" content="${q(E.nome)}">
  <meta property="og:title" content="${q(E.seoTitulo)}">
  <meta property="og:description" content="${q(E.seoDescricao)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${url}assets/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <script type="application/ld+json">${JSON.stringify(ld)}</script>
  <!-- SEO:END -->`;
const f = path.join(root, "index.html");
const html = fs.readFileSync(f, "utf8").replace(/<!-- SEO:START[\s\S]*?<!-- SEO:END -->/, () => block);
fs.writeFileSync(f, html);
const sm = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${url}</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>\n</urlset>\n`;
fs.writeFileSync(path.join(root, "sitemap.xml"), sm);
fs.writeFileSync(path.join(root, "robots.txt"), `User-agent: *\nAllow: /\nDisallow: /admin/\n\nSitemap: ${url}sitemap.xml\n`);
console.log("SEO atualizado para", url);
