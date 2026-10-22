import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
    catalogueProducts,
    getCatalogueProduct,
} from "@/lib/catalogue-products";
import { furnitureCategories, furnitureTypes } from "@/lib/catalogue-filters";
import AddToCartButton from "@/components/AddToCartButton";
import { getSiteUrl } from "@/lib/seo";
import type { Metadata } from "next";

type ProductPageProps = {
    params: Promise<{ id: string }>;
};

const currency = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
});

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
    const { id } = await params;
    const product = getCatalogueProduct(id);
    if (!product) return { title: "Producto no encontrado" };

    const siteUrl = getSiteUrl();
    return {
        title: product.title,
        description: product.description,
        ...(siteUrl
            ? { alternates: { canonical: new URL(`/catalogue/${product.id}`, siteUrl) } }
            : {}),
        openGraph: {
            type: "website",
            title: `${product.title} | Mobelia Studio`,
            description: product.description,
            images: [{ url: product.src_image, alt: product.title }],
        },
    };
}

export function generateStaticParams() {
    return catalogueProducts.map(({ id }) => ({ id: String(id) }));
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    const product = getCatalogueProduct(id);

    if (!product) notFound();

    const category = furnitureCategories.find(
        (option) => option.value === product.category,
    );
    const types = product.types.map(
        (type) => furnitureTypes.find((option) => option.value === type)?.label ?? type,
    );

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="product-preview-page">
                <nav className="product-preview-breadcrumb" aria-label="Ruta de navegación">
                    <Link href="/catalogue">Catálogo</Link>
                    <span aria-hidden="true"> / </span>
                    <span>{product.title}</span>
                </nav>
                <article className="product-preview">
                    <div className="product-preview-gallery">
                        <div className="product-preview-image-frame">
                            <Image
                                className="product-preview-image"
                                src={product.src_image}
                                alt={product.title}
                                width={960}
                                height={640}
                                priority
                            />
                        </div>
                        <p className="product-preview-image-caption">
                            Mobelia Studio <span aria-hidden="true">·</span> Colección de mobiliario
                        </p>
                    </div>
                    <div className="product-preview-content">
                        <p className="product-preview-category">{category?.label ?? product.category}</p>
                        <h1 className="product-preview-title">{product.title}</h1>
                        <p className="product-preview-description">{product.description}</p>
                        <div className="product-preview-price">
                            <span>Precio de referencia</span>
                            <data value={product.price}>{currency.format(product.price)}</data>
                        </div>
                        <div className="product-preview-divider" />
                        <section className="product-preview-details" aria-labelledby="product-materials-title">
                            <h2 id="product-materials-title">Materiales</h2>
                            <ul className="product-preview-tags">
                                {product.materials.map((material) => (
                                    <li key={material}>{material}</li>
                                ))}
                            </ul>
                        </section>
                        <section className="product-preview-details" aria-labelledby="product-spaces-title">
                            <h2 id="product-spaces-title">Espacios recomendados</h2>
                            <ul className="product-preview-tags">
                                {types.map((type) => (
                                    <li key={type}>{type}</li>
                                ))}
                            </ul>
                        </section>
                        <AddToCartButton
                            productId={product.id}
                            className="product-preview-add-to-cart"
                        />
                        <Link className="product-preview-back" href="/catalogue">
                            <span aria-hidden="true">←</span> Volver al catálogo
                        </Link>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
