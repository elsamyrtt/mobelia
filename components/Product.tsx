import Image from "next/image";

type ProductCardProps = {
    title: string;
    price: number;
    description: string;
    image: string;
};

const currency = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
});

export default function Product({ title, price, description, image }: ProductCardProps) {
    return (
        <article>
            <Image src={image} alt={title} width={480} height={320} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Precio: <data value={price}>{currency.format(price)}</data></p>
        </article>
    );
}
