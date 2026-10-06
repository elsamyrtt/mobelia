import Image from "next/image";
import type { ImageProps } from "next/image";
import Link from "next/link";

type CardProps = {
    alt: string;
    src_image: ImageProps["src"];
    title: string;
    description: string;
    link: string;
    price: number;
};

const currency = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
});

export default function Card({ alt, src_image, title, description, link, price }: CardProps) {
    return (
        <article className="flex flex-col gap-2 p-4 shadow-2xl w-64">
            <Image alt={alt} src={src_image} width={200} className="w-full h-auto" />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>
                Precio de referencia: <data value={price}>{currency.format(price)}</data>
            </p>
            <Link href={link} aria-label={`Consultar disponibilidad de ${title}`}>
                Consultar disponibilidad
            </Link>
        </article>
    );
}