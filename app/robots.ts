import type { MetadataRoute } from "next";
import { getSiteUrl, isIndexingEnabled } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    ...(siteUrl && isIndexingEnabled
      ? { sitemap: new URL("/sitemap.xml", siteUrl).href }
      : {}),
  };
}
