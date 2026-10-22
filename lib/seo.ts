export const siteName = "Mobelia Studio";
export const homeTitle = "Diseño de mobiliario en Medellín para hogares y negocios | Mobelia Studio";
export const homeDescription =
  "Diseño de mobiliario para hogares, hoteles y restaurantes. Conoce Mobelia Studio en Medellín y conversa con nuestro equipo sobre tu proyecto.";
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
