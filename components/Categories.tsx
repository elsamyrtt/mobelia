"use client";

import Image from "next/image";
import SillaPrueba from "@/public/Silla_Prueba.webp";
import { useState } from "react";

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
    <section aria-labelledby="catalogo-title" id="catalogo" className="flex flex-col gap-0">
      <div className="flex flex-col items-center justify-center gap-3 bg-ghost-white px-5 py-8 text-center text-carbon-black sm:min-h-56 sm:px-6 sm:py-14">
        <h2 id="catalogo-title" className="section-heading">
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
        className="catalogue-shell"
        role="region"
      >
        <div className="catalogue-stage">
          <button
            aria-label={`Ver producto anterior: ${previousProduct.title}`}
            className="catalogue-preview catalogue-preview-previous"
            onClick={() => setActiveIndex(previousIndex)}
            type="button"
          >
            <Image alt="" className="catalogue-preview-image" src={previousProduct.src_image} />
            <span className="catalogue-preview-title">{previousProduct.title}</span>
          </button>
          <ul className="catalogue-active-list" aria-live="polite">
            <li
              key={activeIndex}
              aria-label={`${product.title}, ${activeIndex + 1} de ${featuredProducts.length}`}
              className="catalogue-active-product"
            >
              <article className="mx-auto flex w-full max-w-lg flex-col items-center gap-4 text-center">
                <Image
                  alt={product.title}
                  className="aspect-4/3 w-full rounded-xl object-cover shadow-[0_18px_44px_rgba(30,24,18,0.12)] sm:rounded-2xl"
                  priority
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 70vw, 100vw"
                  src={product.src_image}
                />
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{product.title}</h3>
                <p className="text-sm text-black/65 sm:text-base">
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
            className="catalogue-preview catalogue-preview-next"
            onClick={() => setActiveIndex(nextIndex)}
            type="button"
          >
            <Image alt="" className="catalogue-preview-image" src={nextProduct.src_image} />
            <span className="catalogue-preview-title">{nextProduct.title}</span>
          </button>
          <div className="catalogue-controls">
            <button
              aria-label="Ver producto anterior"
              className="catalogue-arrow"
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
              className="catalogue-arrow"
              onClick={() => setActiveIndex(nextIndex)}
              type="button"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <aside className="catalogue-details flex flex-col gap-6">
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
                  className="text-sm text-black/60"
                  key={material}
                >
                  {material}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-col sm:gap-3">
            <button
              className="col-span-2 inline-flex min-h-12 w-full cursor-pointer items-center justify-center rounded-full bg-brass px-4 text-sm font-medium text-carbon-black transition-colors hover:bg-[#dbb97f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-carbon-black motion-reduce:transition-none sm:col-span-1 sm:px-5"
              onClick={() => setCart((items) => ({ ...items, [product.id]: (items[product.id] ?? 0) + 1 }))}
              type="button"
            >
              Agregar al carrito{cartCount > 0 ? ` · ${cartCount}` : ""}
            </button>
            <a
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full px-2 text-center text-xs font-medium text-[#171717] underline decoration-black/25 underline-offset-4 transition-colors hover:text-[#8a6533] hover:decoration-brass focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a46a] sm:min-h-12 sm:px-5 sm:text-sm"
              href={whatsappUrl(`Hola, quiero comprar ${product.title}.`)}
              rel="noopener noreferrer"
              target="_blank"
            >
              Comprar ahora
            </a>
            <a
              className="inline-flex min-h-11 items-center justify-center px-1 text-center text-xs font-medium text-black/75 underline underline-offset-4 transition hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-base"
              href={whatsappUrl(`Hola, quiero cotizar un cambio especial para ${product.title}.`)}
              rel="noopener noreferrer"
              target="_blank"
            >
              Cotizar un cambio especial
            </a>
            <a
              className="inline-flex min-h-11 items-center justify-center px-1 text-center text-xs text-black/60 transition hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-sm"
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
