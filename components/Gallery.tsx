import Image from "next/image";
import Link from "next/link";
import { galleryProjects } from "@/lib/gallery-projects";

export default function Gallery(): React.JSX.Element {
  return (
    <section
      aria-labelledby="gallery-title"
      id="gallery"
      className="homepage-gallery"
    >
      <div className="homepage-gallery-inner">
        <header className="homepage-gallery-header">
          <p className="section-kicker">Trabajos</p>
          <h2 id="gallery-title" className="section-heading">Galería de proyectos</h2>
          <p className="section-copy">
            Una selección visual de espacios y mobiliario. Conoce las fotografías disponibles y conversemos sobre tu proyecto.
          </p>
        </header>
        <div className="homepage-gallery-grid">
          {galleryProjects.map((project) => (
            <Link
              className="homepage-gallery-card"
              href={`/gallery#${project.id}`}
              key={project.id}
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                sizes="(min-width: 1280px) 50vw, (min-width: 768px) 70vw, 100vw"
                className="homepage-gallery-image"
              />
              <div className="homepage-gallery-caption">
                <div>
                  <p>{project.categories.join(" · ")}</p>
                  <h3>{project.title}</h3>
                </div>
                <span aria-hidden="true">↗</span>
              </div>
            </Link>
          ))}
        </div>
        <Link className="homepage-gallery-more" href="/gallery">
          Explorar galería <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
