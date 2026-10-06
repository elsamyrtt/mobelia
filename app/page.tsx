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
        <div className="flex flex-1 flex-row">
          <div className="bg-[var(--color-ghost-white)] w-16 h16 p-3">1</div>
          <div className="bg-[var(--color-jasmine)] w-16 h16 p-3">2</div>
          <div className="bg-[var(--color-carbon-black)] w-16 h16 p-3">3</div>
          <div className="bg-[var(--color-wisteria-blue)] w-16 h16 p-3">4</div>
          <div className="bg-[var(--color-ink)] w-16 h16 p-3">5</div>
          <div className="bg-[var(--color-brass)] w-16 h16 p-3">6</div>
        </div>
      </main>
      <footer>
        <small>Mobelia Studio</small>
      </footer>
    </>
  );
}
