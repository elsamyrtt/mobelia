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
    <section aria-labelledby="process-title" id="proceso">
      <h2 id="process-title">Proceso de trabajo</h2>
      <p>
        Conoce las etapas generales de un proyecto. Los materiales, tiempos y
        servicios incluidos se confirman en cada cotización.
      </p>
      <ol>
        {processSteps.map((step) => (
          <li key={step.title}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
