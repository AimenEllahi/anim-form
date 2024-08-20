/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://dndai.app",
  generateRobotsTxt: true, // Generate robots.txt file
  changefreq: "daily", 
  priority: 0.7, // Standard priority for all pages
  generateIndexSitemap: false, // No need for an index sitemap with a small number of pages
  exclude: ["/my-account/gallery", "/test", "/game/play"], // Exclude sensitive or irrelevant pages
  transform: async (config, path) => {
    return {
      loc: path, // The URL of the page
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
