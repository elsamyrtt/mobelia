import Card from "./Card";
import Logo_svg from "@/public/Logo_svg.svg";

const featuredProducts = [
  {
    id: 1,
    alt: "",
    src_image: Logo_svg,
    title: "Silla Crossback",
    description: "Silla de madera maciza con diseño clásico y acabado natural.",
    link: "#contacto",
    price: 89900,
  },
  {
    id: 2,
    alt: "",
    src_image: Logo_svg,
    title: "Mesa de Comedor Roble",
    description: "Mesa para seis personas elaborada en madera de roble.",
    link: "#contacto",
    price: 1499900,
  },
];

export default function Categories() {
  return (
    <section aria-labelledby="catalogo-title" id="catalogo">
      <h2 id="catalogo-title">Productos destacados</h2>
      <p>
        Consulta con Mobelia la disponibilidad, las opciones de acabado y las
        condiciones vigentes de cada producto.
      </p>
      <p role="note">
        Estos productos y precios son datos de demostración. Deben reemplazarse
        por información confirmada antes de publicar el catálogo.
      </p>
      <ul>
        {featuredProducts.map((product) => (
          <li key={product.id}>
            <Card {...product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
