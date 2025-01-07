const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

// Define the routes based on App.js
const routes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/project/event-mania', changefreq: 'weekly', priority: 0.9 },
    { url: '/project/youtube-downloader', changefreq: 'weekly', priority: 0.9 },
    { url: '/project/pro-reader', changefreq: 'weekly', priority: 0.8 },
];

// Generate sitemap
const generateSitemap = async () => {
    const sitemap = new SitemapStream({ hostname: 'https://kushyanth-portfolio.web.app/' });

    routes.forEach((route) => sitemap.write(route));
    sitemap.end();

    const sitemapData = await streamToPromise(sitemap).then((data) => data.toString());
    fs.writeFileSync('./public/sitemap.xml', sitemapData);

    console.log('Sitemap successfully generated at ./public/sitemap.xml');
};

generateSitemap().catch(console.error);
