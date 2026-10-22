import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";

type ProductCardProps = {
    id: number;
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

export default function Product({ id, name, price, description, image }: ProductCardProps) {
    return (
        <article className="catalogue-product-card">
            <Link className="catalogue-product-link" href={`/catalogue/${id}`}>
                <Image src={image} alt={name} width={480} height={320} />
                <h2>{name}</h2>
                <p>{description}</p>
                <p>Precio de referencia: <data value={price}>{currency.format(price)}</data></p>
            </Link>
            <AddToCartButton
                productId={id}
                className="catalogue-add-to-cart"
            />
        </article>
    );
}
