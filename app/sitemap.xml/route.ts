import { getSiteUrl, isIndexingEnabled } from "@/lib/seo";
import { catalogueProducts } from "@/lib/catalogue-products";

export const dynamic = "force-dynamic";

export function GET(): Response {
  const siteUrl = getSiteUrl();
  if (!isIndexingEnabled || !siteUrl) {
    return new Response(
      "Sitemap unavailable: configure SITE_URL and set SEO_INDEXING_ENABLED=true for the canonical production site.",
      {
        status: 503,
        headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
      },
    );
  }

  const paths = [
    "/",
    "/catalogue",
    "/gallery",
    ...catalogueProducts.map(({ id }) => `/catalogue/${id}`),
  ];
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...paths.map((path) => `  <url><loc>${new URL(path, siteUrl).href}</loc></url>`),
    "</urlset>",
  ].join("\n");

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
