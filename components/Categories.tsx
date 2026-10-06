"use client";

import Image from "next/image";
import SillaPrueba from "@/public/Silla_Prueba.webp";
import { useState } from "react";
import heroStyles from "@/styles/Hero.module.css";
import styles from "@/styles/Categories.module.css";

/*Aqui hay que cambiar estos productos para usar la clase /models/Product.ts*/
const featuredProducts = [
  {
    id: 1,
    src_image: SillaPrueba,
    title: "Silla Crossback",
    description: "Silla de madera maciza con diseño clásico y acabado natural.",
    materials: ["Madera maciza"],
    price: 89900,
  },
  {
    id: 2,
    src_image: SillaPrueba,
    title: "Mesa de Comedor Roble",
    description: "Mesa para seis personas elaborada en madera de roble.",
    materials: ["Madera de roble"],
    price: 1499900,
  },
  {
    id: 1,
    src_image: SillaPrueba,
    title: "Silla Crossback",
    description: "Silla de madera maciza con diseño clásico y acabado natural.",
    materials: ["Madera maciza"],
    price: 89900,
  },
];

const currency = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

const whatsappUrl = (message: string) =>
  `https://wa.me/573043907335?text=${encodeURIComponent(message)}`;

export default function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cart, setCart] = useState<Record<number, number>>({});
  const product = featuredProducts[activeIndex];
  const previousIndex = (activeIndex - 1 + featuredProducts.length) % featuredProducts.length;
  const nextIndex = (activeIndex + 1) % featuredProducts.length;
  const previousProduct = featuredProducts[previousIndex];
  const nextProduct = featuredProducts[nextIndex];
  const cartCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  const productQuantity = cart[product.id] ?? 0;

  return (
    <section aria-labelledby="catalogo-title" id="catalogo" className="flex flex-col gap-4">
      <div className="flex min-h-56 flex-col items-center justify-center gap-2 bg-(--color-ghost-white) px-6 py-12 text-center text-[#1a1918]">
        <h2 id="catalogo-title" className="text-4xl font-bold">
          Productos destacados
        </h2>
        <p className="max-w-xl text-sm text-black/65">
          Consulta con Mobelia la disponibilidad, las opciones de acabado y las
          condiciones vigentes de cada producto.
        </p>
      </div>
      <div
        aria-label="Productos destacados"
        aria-roledescription="carrusel"
        className={`${styles.layout} mx-auto grid w-full max-w-360 grid-cols-1 items-start gap-8 px-6 py-10 md:px-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-14`}
        role="region"
      >
        <div className={`${styles.stage} relative flex min-w-0 items-center justify-center`}>
          <button
            aria-label={`Ver producto anterior: ${previousProduct.title}`}
            className={`${styles.preview} ${styles.previewPrevious}`}
            onClick={() => setActiveIndex(previousIndex)}
            type="button"
          >
            <Image alt="" className={styles.previewImage} src={previousProduct.src_image} />
            <span className={styles.previewTitle}>{previousProduct.title}</span>
          </button>
          <ul className={styles.activeList} aria-live="polite">
            <li
              key={activeIndex}
              aria-label={`${product.title}, ${activeIndex + 1} de ${featuredProducts.length}`}
              className={styles.activeProduct}
            >
              <article className="mx-auto flex w-full max-w-lg flex-col items-center gap-4 text-center">
                <Image
                  alt={product.title}
                  className="aspect-4/3 w-full rounded-sm object-cover shadow-[0_24px_60px_rgba(30,24,18,0.12)]"
                  priority
                  src={product.src_image}
                />
                <h3 className="text-xl font-medium">{product.title}</h3>
                <p className="text-sm text-black/65">
                  Precio de referencia:{" "}
                  <data className="font-medium text-[#171717]" value={product.price}>
                    {currency.format(product.price)}
                  </data>
                </p>
              </article>
            </li>
          </ul>
          <button
            aria-label={`Ver siguiente producto: ${nextProduct.title}`}
            className={`${styles.preview} ${styles.previewNext}`}
            onClick={() => setActiveIndex(nextIndex)}
            type="button"
          >
            <Image alt="" className={styles.previewImage} src={nextProduct.src_image} />
            <span className={styles.previewTitle}>{nextProduct.title}</span>
          </button>
          <div className={styles.controls}>
            <button
              aria-label="Ver producto anterior"
              className={styles.arrow}
              onClick={() => setActiveIndex(previousIndex)}
              type="button"
            >
              <span aria-hidden="true">←</span>
            </button>
            <p className="min-w-12 text-center text-sm tabular-nums text-black/60" aria-live="polite">
              {String(activeIndex + 1).padStart(2, "0")} / {String(featuredProducts.length).padStart(2, "0")}
            </p>
            <button
              aria-label="Ver siguiente producto"
              className={styles.arrow}
              onClick={() => setActiveIndex(nextIndex)}
              type="button"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <aside className={`${styles.details} flex flex-col gap-6`}>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.18em] text-black/45">Detalles</p>
            <h3 className="text-2xl font-medium text-[#171717]">{product.title}</h3>
            <p className="leading-relaxed text-black/70">{product.description}</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-[#171717]">Materiales</h4>
            <ul className="flex flex-wrap gap-2">
              {product.materials.map((material) => (
                <li
                  className="rounded-full border border-black/10 px-3 py-1 text-sm text-black/70"
                  key={material}
                >
                  {material}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <button
              className="rounded-2xl w-full p-2.5 text-md font-[500] cursor-pointer justify-center rounded-[999px] hover:bg-[#dbb97f] bg-[var(--color-brass)] !text-[var(--color-ink)] focus-visible:outline-2 focus-visible:outline-offset-2"
              onClick={() => setCart((items) => ({ ...items, [product.id]: (items[product.id] ?? 0) + 1 }))}
              type="button"
            >
              Agregar al carrito{cartCount > 0 ? ` · ${cartCount}` : ""}
            </button>
            <a
              className={`${heroStyles.ghost} ${styles.lightGhost} w-full justify-center`}
              href={whatsappUrl(`Hola, quiero comprar ${product.title}.`)}
              rel="noopener noreferrer"
              target="_blank"
            >
              Comprar ahora
            </a>
            <a
              className="text-center text-md font-[500] text-black/75 underline underline-offset-4 transition hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2"
              href={whatsappUrl(`Hola, quiero cotizar un cambio especial para ${product.title}.`)}
              rel="noopener noreferrer"
              target="_blank"
            >
              Cotizar un cambio especial
            </a>
            <a
              className="text-center text-sm text-black/60 transition hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2"
              href={whatsappUrl(`Hola, quisiera asesoría sobre ${product.title}.`)}
              rel="noopener noreferrer"
              target="_blank"
            >
              Asesorarme por WhatsApp
            </a>
          </div>
          <p aria-live="polite" className="min-h-5 text-center text-xs text-black/55">
            {productQuantity > 0 && `${product.title}: ${productQuantity} en el carrito`}
          </p>
        </aside>
      </div>
    </section>
  );
}
