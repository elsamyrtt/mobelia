import Image from "next/image";

type ProductCardProps = {
    name: string;
    price: number;
    description: string;
    image: string;
};

const currency = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
});

export default function Product({ name, price, description, image }: ProductCardProps) {
    return (
        <article>
            <Image src={image} alt={name} width={480} height={320} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Precio: <data value={price}>{currency.format(price)}</data></p>
        </article>
    );
}
