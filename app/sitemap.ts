import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://feedb.vercel.app",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://feedb.vercel.app/main",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
