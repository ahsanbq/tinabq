// next-sitemap.config.js

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.binaryquest.com",
  generateRobotsTxt: true, // Generate `robots.txt` file along with the sitemap
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/product",
          "/insight",
          "/service/",
          "/portfolio",
          "/service",
        ],
      },
    ],
    transformRobotsTxt: async (config, robotsTxt) => {
      // Remove the Host line if it exists
      const withoutHost = robotsTxt.replace(
        /# Host\nHost: https?:\/\/[^/]+\n?/g,
        ""
      );

      // Remove any commented-out sitemap lines
      const withoutCommentedSitemap = withoutHost.replace(
        /\/\/www\.binaryquest\.com\/sitemap\.xml\n?/g,
        ""
      );

      // Ensure the correct Sitemap line is included
      const finalRobotsTxt =
        withoutCommentedSitemap +
        "\n# Sitemaps\nSitemap: https://www.binaryquest.com/sitemap.xml\n";

      return finalRobotsTxt;
    },
  },
  transform: async (config, path) => {
    const disallowedPaths = [
      "/product",
      "/insight",
      "/service/",
      "/portfolio",
      "/service",
    ];

    // Exclude disallowed paths from sitemap generation
    if (disallowedPaths.some((disallowed) => path.includes(disallowed))) {
      return null;
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
