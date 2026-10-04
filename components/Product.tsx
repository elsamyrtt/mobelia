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
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Precio: <data value={price}>{currency.format(price)}</data></p>
        </article>
    );
}
