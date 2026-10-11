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
        <article className="flex w-full max-w-sm flex-col overflow-hidden border border-carbon-black/10 bg-white transition-colors duration-300 hover:border-brass/60">
            <Image
                alt={alt}
                src={src_image}
                width={640}
                height={480}
                className="aspect-4/3 w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-medium tracking-tight text-carbon-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-carbon-black/65">{description}</p>
                <div className="mt-5 border-t border-carbon-black/10 pt-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-carbon-black/50">
                        Precio de referencia
                    </p>
                    <data className="mt-1 block text-base font-medium text-carbon-black" value={price}>
                        {currency.format(price)}
                    </data>
                </div>
                <Link
                    className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-brass px-5 text-sm font-medium text-carbon-black transition-colors hover:bg-[#dbb97f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-carbon-black motion-reduce:transition-none"
                    href={link}
                    aria-label={`Consultar disponibilidad de ${title}`}
                >
                    Consultar disponibilidad
                </Link>
            </div>
        </article>
    );
}