const processSteps = [
  {
    title: "Selección de materiales",
    description:
      "Elegimos maderas y materiales para definir las características y el acabado de cada proyecto.",
  },
  {
    title: "Diseño",
    description:
      "Preparamos una propuesta de acuerdo con las necesidades, el espacio y el estilo del cliente.",
  },
  {
    title: "Fabricación",
    description:
      "Fabricamos cada pieza siguiendo las especificaciones acordadas para el proyecto.",
  },
  {
    title: "Instalación y entrega",
    description:
      "Coordinamos la entrega o instalación según el alcance y las condiciones confirmadas para el proyecto.",
  },
];

export default function Process(): React.JSX.Element {
  return (
    <section
      aria-labelledby="process-title"
      id="proceso"
      className="bg-[linear-gradient(180deg,#eee3d4,var(--color-ghost-white)_57%)] px-5 py-16 text-carbon-black sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="section-kicker">
            De la idea a tu espacio
          </p>
          <h2 id="process-title" className="section-heading">
            Proceso de trabajo
          </h2>
          <p className="section-copy mx-auto mt-5">
            Conoce las etapas generales de un proyecto. Los materiales, tiempos y
            servicios incluidos se confirman en cada cotización.
          </p>
          <div aria-hidden="true" className="section-divider mx-auto" />
        </header>
        <ol className="mobile-two-col grid list-none gap-3 p-0 sm:gap-4 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-white/70 bg-white/85 p-3 shadow-[0_12px_36px_rgba(28,22,17,0.06)] sm:rounded-3xl sm:p-6"
            >
              <span className=" text-sm font-medium tracking-[0.12em] text-brass">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-base font-medium leading-tight tracking-tight text-carbon-black sm:mt-3 sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-[1.5] text-carbon-black/75 sm:mt-4 sm:text-base sm:leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
