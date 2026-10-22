import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getSiteUrl, homeDescription, homeTitle, isIndexingEnabled, siteName } from "@/lib/seo";
import { CartProvider } from "@/components/CartProvider";
import "../styles/components.css";

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
      <body className="site-body">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
