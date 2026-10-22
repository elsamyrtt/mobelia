import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { galleryProjects } from "@/lib/gallery-projects";
import { getSiteUrl, siteName } from "@/lib/seo";

const siteUrl = getSiteUrl();
const galleryTitle = "Galería de mobiliario y espacios en Medellín";
const galleryDescription =
    "Explora fotografías de mobiliario y espacios para hogares, hoteles y restaurantes. Contacta a Mobelia Studio en Medellín para conversar sobre tu proyecto.";

export const metadata: Metadata = {
    title: galleryTitle,
    description: galleryDescription,
    ...(siteUrl
        ? { alternates: { canonical: new URL("/gallery", siteUrl) } }
        : {}),
    openGraph: {
        type: "website",
        locale: "es_CO",
        siteName,
        title: galleryTitle,
        description: galleryDescription,
        ...(siteUrl ? { url: new URL("/gallery", siteUrl) } : {}),
        images: galleryProjects.slice(0, 1).map((project) => ({
            url: project.image.src,
            alt: project.imageAlt,
        })),
    },
    twitter: {
        card: "summary_large_image",
        title: galleryTitle,
        description: galleryDescription,
        images: galleryProjects.slice(0, 1).map((project) => project.image.src),
    },
};

export default function GalleryPage() {
    const [featuredProject, ...otherProjects] = galleryProjects;

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="projects-page">
                <section className="projects-hero" aria-labelledby="projects-title">
                    <div className="projects-hero-image">
                        {featuredProject && (
                            <Image
                                src={featuredProject.image}
                                alt={featuredProject.imageAlt}
                                priority
                                sizes="100vw"
                                className="projects-hero-photo"
                            />
                        )}
                    </div>
                    <div className="projects-hero-copy">
                        <p className="section-kicker">Mobelia Studio · Medellín, Antioquia</p>
                        <h1 id="projects-title">Proyectos de mobiliario</h1>
                        <p>
                            Una mirada a espacios equipados con mobiliario y a las posibilidades de diseño para hogares, hoteles y restaurantes.
                        </p>
                        <Link href="#projects-grid" className="projects-hero-link">
                            Explorar fotografías <span aria-hidden="true">↓</span>
                        </Link>
                    </div>
                    {featuredProject && (
                        <p className="projects-hero-caption">{featuredProject.title}</p>
                    )}
                </section>

                <section className="projects-gallery-section" id="projects-grid" aria-labelledby="projects-gallery-title">
                    <header className="projects-gallery-header">
                        <div>
                            <p className="section-kicker">Portafolio visual</p>
                            <h2 id="projects-gallery-title">Espacios y mobiliario</h2>
                        </div>
                        <p>
                            Las fotografías disponibles se presentan con la información confirmada, sin atribuir clientes ni especificaciones no documentadas.
                        </p>
                    </header>
                    <div className="projects-masonry">
                        {galleryProjects.map((project) => (
                            <article className="projects-card" id={project.id} key={project.id}>
                                <div className="projects-card-image">
                                    <Image
                                        src={project.image}
                                        alt={project.imageAlt}
                                        sizes="(min-width: 1100px) 40vw, (min-width: 700px) 60vw, 100vw"
                                        className="projects-card-photo"
                                    />
                                </div>
                                <div className="projects-card-copy">
                                    <p>{project.categories.join(" · ")}</p>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                    {otherProjects.length === 0 && (
                        <p className="projects-gallery-note">
                            Esta galería se ampliará a medida que se incorporen fotografías y detalles verificados de otros proyectos.
                        </p>
                    )}
                    <div className="projects-contact">
                        <p>¿Tienes un proyecto de mobiliario en Medellín?</p>
                        <Link href="/#contacto">Conversemos sobre tu espacio</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
