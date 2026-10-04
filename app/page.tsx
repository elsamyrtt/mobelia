import Navbar from "@/components/Navbar";
import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import Calculator from "@/components/Calculator";
import Contact from "@/components/Contact";
import OrganizationJsonLd from "@/components/OrganizationJsonLd";
import type { Metadata } from "next";
import { getSiteUrl, homeDescription, homeTitle, siteName } from "@/lib/seo";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  ...(siteUrl ? { alternates: { canonical: new URL("/", siteUrl) } } : {}),
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName,
    title: homeTitle,
    description: homeDescription,
    ...(siteUrl ? { url: new URL("/", siteUrl) } : {}),
  },
  twitter: {
    card: "summary",
    title: homeTitle,
    description: homeDescription,
  },
};

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main id="contenido-principal">
        <OrganizationJsonLd />
        <Hero />
        <Categories />
        <About />
        <Process />
        <Calculator />
        <Contact />
      </main>
      <footer>
        <small>Mobelia Studio</small>
      </footer>
    </>
  );
}
