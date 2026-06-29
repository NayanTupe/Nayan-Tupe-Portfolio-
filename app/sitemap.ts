import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nayan-tupe.com";
  return [
    {
      url: base,
      lastModified: new Date("2026-06-29"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
