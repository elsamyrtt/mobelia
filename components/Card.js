import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Logo_svg from "@/public/Logo_svg.svg"

export default function Card({ alt, src_image, title, description, link, price }) {
    return (
        <article>
            <Image
                alt={alt}
                src={src_image} />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <strong>${price}</strong>
                <Link href={link}>Ver Producto</Link>
            </div>
            <div>   
                <Button text="Agregar al carrito">
                    <Image
                        alt="Imagen de agregar al carrito el producto"
                        src={Logo_svg} />
                </Button>
            </div>
        </article>
    );
}