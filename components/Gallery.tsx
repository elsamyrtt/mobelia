import imagetest from "@/public/image.jpeg";
import Image from "next/image";

export default function Gallery(): React.JSX.Element {
  return (
    <section
      aria-labelledby="gallery-title"
      id="gallery"
      className="bg-[linear-gradient(180deg,var(--color-ghost-white),#f3ece2)] px-5 py-16 text-carbon-black sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="section-kicker">Trabajos</p>
          <h2 id="gallery-title" className="section-heading">
            Galería de proyectos
          </h2>
          <p className="section-copy mx-auto mt-4 sm:mt-5">
            Espacios, piezas y propuestas que reflejan el enfoque de Mobelia Studio.
          </p>
          <div aria-hidden="true" className="section-divider mx-auto" />
        </header>

        <div className="mobile-two-col grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-2xl border border-carbon-black/8 bg-white/85 shadow-[0_12px_36px_rgba(28,22,17,0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(28,22,17,0.12)] motion-reduce:transition-none sm:rounded-[1.5rem]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#e9e1d5]">
                <Image
                  src={imagetest}
                  alt={`Proyecto de mobiliario a medida ${index + 1}`}
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                />
              </div>
              <div className="space-y-2 p-3 sm:space-y-3 sm:p-6">
                <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-carbon-black/55 sm:text-[0.7rem] sm:tracking-[0.22em]">
                  Proyecto {index + 1}
                </span>
                <h3 className="text-base font-semibold leading-tight tracking-[-0.03em] text-carbon-black sm:text-2xl sm:tracking-[-0.04em]">
                  Trabajo completado
                </h3>
                <p className="text-xs leading-[1.45] text-carbon-black/70 sm:text-[0.95rem] sm:leading-relaxed">
                  Juana nos contrató para crear sillas y mesas para su salón de
                  eventos. Diseñamos cada pieza para complementar su espacio y
                  reflejar su estilo.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
