import Image from "next/image";
import Card from "./Card";
import Logo_svg from "@/public/Logo_svg.svg"

export default function Categories(){
  const cards = [
    {
      id: 1,
      alt: 'Silla Crossback de madera',
      src_image: Logo_svg,
      title: 'Silla Crossback',
      description: 'Silla de madera maciza con diseño clásico y acabado natural.',
      link: '/productos/silla-crossback',
      price: 89900,
    },
    {
      id: 2,
      alt: 'Mesa de comedor de roble',
      src_image: Logo_svg,
      title: 'Mesa de Comedor Roble',
      description: 'Mesa para seis personas elaborada en madera de roble.',
      link: '/productos/mesa-comedor-roble',
      price: 1499900,
    }
  ];
    return(
        <section>
            {cards.map((card) => (
                <Card
                    key={card.id}
                    alt={card.alt}
                    src_image={card.src_image}
                    title={card.title}
                    description={card.description}
                    link={card.link}
                    price={card.price}
                    
                />
            ))}
        </section>
    );
}