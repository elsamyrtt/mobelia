export const siteName = "Mobelia Studio";
export const homeTitle = "Muebles para hogares, hoteles y restaurantes | Mobelia Studio";
export const homeDescription =
  "Diseño de muebles para hogares, hoteles y restaurantes. Conoce la propuesta de Mobelia Studio y consulta sobre productos y proyectos a medida.";
export const instagramProfile = "https://www.instagram.com/mobeliastudio/";
export const isIndexingEnabled = process.env.SEO_INDEXING_ENABLED === "true";

export function getSiteUrl(): URL | null {
  const configuredUrl = process.env.SITE_URL?.trim();
  if (!configuredUrl) return null;

  let siteUrl: URL;
  try {
    siteUrl = new URL(configuredUrl);
  } catch {
    throw new Error("SITE_URL must be a valid absolute URL for Mobelia production");
  }

  const isLocalDevelopmentHost = ["localhost", "127.0.0.1"].includes(siteUrl.hostname);
  if (siteUrl.protocol !== "https:" && !(siteUrl.protocol === "http:" && isLocalDevelopmentHost)) {
    throw new Error("SITE_URL must use HTTPS except for localhost development");
  }
  if (siteUrl.username || siteUrl.password || siteUrl.search || siteUrl.hash || siteUrl.pathname !== "/") {
    throw new Error("SITE_URL must contain only the origin, without credentials, path, query, or hash");
  }

  return siteUrl;
}

