import type { Metadata } from "next";
import { getSiteUrl, homeDescription, homeTitle, isIndexingEnabled, siteName } from "@/lib/seo";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: siteUrl } : {}),
  title: {
    default: homeTitle,
    template: "%s | Mobelia Studio",
  },
  description: homeDescription,
  applicationName: siteName,
  robots: {
    index: isIndexingEnabled && siteUrl !== null,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName,
    title: homeTitle,
    description: homeDescription,
  },
  twitter: {
    card: "summary",
    title: homeTitle,
    description: homeDescription,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
import type { ReactNode } from "react";
import "../styles/components.css";
