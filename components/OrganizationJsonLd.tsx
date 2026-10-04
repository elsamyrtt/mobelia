import { getSiteUrl, instagramProfile, siteName } from "@/lib/seo";

export default function OrganizationJsonLd() {
  const siteUrl = getSiteUrl();
  if (!siteUrl) return null;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": new URL("/#organization", siteUrl).href,
        name: siteName,
        url: siteUrl.href,
        sameAs: [instagramProfile],
      },
      {
        "@type": "WebSite",
        "@id": new URL("/#website", siteUrl).href,
        url: siteUrl.href,
        name: siteName,
        inLanguage: "es-CO",
        publisher: { "@id": new URL("/#organization", siteUrl).href },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
    />
  );
}
