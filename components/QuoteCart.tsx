"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useCart } from "@/components/CartProvider";
import { getCatalogueProduct } from "@/lib/catalogue-products";
import { buildQuoteWhatsAppUrl } from "@/lib/quote-message";

export default function QuoteCart() {
    const { items, itemCount, hydrated, setQuantity, removeProduct } = useCart();
    const quoteItems = useMemo(
        () => items.flatMap((item) => {
            const product = getCatalogueProduct(String(item.productId));
            return product ? [{ product, quantity: item.quantity }] : [];
        }),
        [items],
    );
    const whatsappUrl = buildQuoteWhatsAppUrl(quoteItems);

    return (
        <section
            aria-labelledby="quote-cart-title"
            id="cotizacion"
            className="quote-cart-section quote-cart-page"
        >
            <div className="quote-cart-container">
                <header className="quote-cart-header">
                    <p className="section-kicker">Tu proyecto, a tu medida</p>
                    <h2 id="quote-cart-title" className="section-heading">Carrito de cotización</h2>
                    <p className="section-copy">
                        Reúne los muebles que te interesan y solicita una asesoría personalizada por WhatsApp.
                    </p>
                </header>
                <div className="quote-cart-layout">
                    <section className="quote-cart-items" aria-label="Productos seleccionados">
                        {!hydrated ? (
                            <p role="status">Cargando tu selección…</p>
                        ) : quoteItems.length ? (
                            <ul className="quote-cart-list">
                                {quoteItems.map(({ product, quantity }) => (
                                    <li className="quote-cart-item" key={product.id}>
                                        <Link
                                            className="quote-cart-item-image"
                                            href={`/catalogue/${product.id}`}
                                            aria-label={`Ver ${product.title}`}
                                        >
                                            <Image
                                                src={product.src_image}
                                                alt=""
                                                width={120}
                                                height={120}
                                                sizes="88px"
                                            />
                                        </Link>
                                        <div className="quote-cart-item-info">
                                            <Link className="quote-cart-item-name" href={`/catalogue/${product.id}`}>
                                                {product.title}
                                            </Link>
                                            <p>{product.materials.join(" · ")}</p>
                                            <label htmlFor={`quote-quantity-${product.id}`}>Cantidad</label>
                                            <input
                                                id={`quote-quantity-${product.id}`}
                                                type="number"
                                                inputMode="numeric"
                                                min={1}
                                                step={1}
                                                value={quantity}
                                                onChange={(event) => {
                                                    const nextQuantity = event.currentTarget.valueAsNumber;
                                                    if (Number.isSafeInteger(nextQuantity) && nextQuantity > 0) {
                                                        setQuantity(product.id, nextQuantity);
                                                    }
                                                }}
                                            />
                                        </div>
                                        <button
                                            className="quote-cart-remove"
                                            type="button"
                                            onClick={() => removeProduct(product.id)}
                                            aria-label={`Quitar ${product.title} del carrito`}
                                        >
                                            Quitar
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="quote-cart-empty">
                                <h3>Tu carrito está listo para empezar</h3>
                                <p>Explora el catálogo y agrega los muebles que quieres cotizar.</p>
                                <Link className="quote-cart-continue" href="/catalogue">
                                    Explorar catálogo
                                </Link>
                            </div>
                        )}
                    </section>
                    <aside className="quote-cart-summary" aria-labelledby="quote-summary-title">
                        <h3 id="quote-summary-title">Resumen</h3>
                        <p aria-live="polite">
                            {itemCount} {itemCount === 1 ? "unidad seleccionada" : "unidades seleccionadas"}
                        </p>
                        <p className="quote-cart-disclaimer">
                            Precios, disponibilidad, medidas y acabados se confirman durante la asesoría.
                        </p>
                        {whatsappUrl ? (
                            <a
                                className="quote-cart-whatsapp"
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Cotizar por WhatsApp
                            </a>
                        ) : (
                            <span className="quote-cart-whatsapp quote-cart-whatsapp-disabled" aria-disabled="true">
                                Agrega un producto para cotizar
                            </span>
                        )}
                        <Link className="quote-cart-continue" href="/catalogue">
                            Seguir explorando
                        </Link>
                        <p className="quote-cart-note">
                            WhatsApp abrirá un mensaje preparado. Deberás revisarlo y enviarlo desde la aplicación.
                        </p>
                    </aside>
                </div>
            </div>
        </section>
    );
}
