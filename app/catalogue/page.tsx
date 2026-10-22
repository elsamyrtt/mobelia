import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Search from "@/components/Search";
import Catalogue from "@/components/Catalogue";
import { parseCatalogueFilters } from "@/lib/catalogue-filters";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/seo";

type CataloguePageProps = {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
};

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
    title: "Catálogo de muebles en Medellín",
    description: "Explora el catálogo de mobiliario de Mobelia Studio y encuentra opciones para hogares, restaurantes y hoteles.",
    ...(siteUrl ? { alternates: { canonical: new URL("/catalogue", siteUrl) } } : {}),
};

export default async function catalogue({ searchParams }: CataloguePageProps) {
    const filters = parseCatalogueFilters(await searchParams);

    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Search filters={filters} />
                <Catalogue filters={filters} />
            </main>
            <Footer />
        </>);
} 