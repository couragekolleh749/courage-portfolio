export default function sitemap() {
  return [
    {
      url: "https://courage-portfolio-five.vercel.app/",
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 1.0,
    },
    {
      url: "https://courage-portfolio-five.vercel.app/#about",
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: "https://courage-portfolio-five.vercel.app/#projects",
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: "https://courage-portfolio-five.vercel.app/#contact",
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.7,
    },
  ];
}
