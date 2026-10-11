"use client";

import { useRef, useState } from "react";
import Product from "@/models/Product";
import ProductSelector from "./ProductSelector";

type OrderItem = {
    id: number;
    product: Product | null;
    quantity: number;
};

const iva = 50000;
const transport = 230000;
const discount = 200000;
const painting = 500000;
const upholstering = 200000;
const currency = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
});
const controlClassName = "mt-2 min-h-12 w-full rounded-none border-0 border-b border-carbon-black/20 bg-transparent px-1 py-3 text-base text-carbon-black outline-none transition-colors placeholder:text-carbon-black/40 focus:border-brass focus:ring-0";
const actionClassName = "inline-flex min-h-11 items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-carbon-black transition-colors hover:bg-white/55 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-carbon-black motion-reduce:transition-none";

export default function Calculator() {
    const [items, setItems] = useState<OrderItem[]>([
        { id: 0, product: null, quantity: 0 },
    ]);
    const nextItemId = useRef(1);
    const [location, setLocation] = useState("");
    const [totalToggle, setTotalToggle] = useState(false);
    const [timeOfDelivery, setTimeOfDelivery] = useState("");

    const orderItems = items.filter(
        (item): item is OrderItem & { product: Product } =>
            item.product !== null && item.quantity > 0,
    );
    const productSubtotal = orderItems.reduce(
        (subtotal, item) => subtotal + item.quantity * item.product.price,
        0,
    );
    const hasProducts = orderItems.length > 0;
    const total = hasProducts
        ? productSubtotal + iva + transport - discount + painting + upholstering
        : 0;

    const addItem = () => {
        const id = nextItemId.current;
        nextItemId.current += 1;
        setItems((currentItems) => [
            ...currentItems,
            { id, product: null, quantity: 1 },
        ]);
    };

    const updateItem = (id: number, updates: Partial<Omit<OrderItem, "id">>) => {
        setItems((currentItems) =>
            currentItems.map((item) => item.id === id ? { ...item, ...updates } : item),
        );
    };

    const removeItem = (id: number) => {
        setItems((currentItems) => currentItems.filter((item) => item.id !== id));
    };

    return (
        <section
            aria-labelledby="calculator-title"
            id="calculadora"
            className="bg-[var(--color-ghost-white)] px-5 py-16 text-carbon-black sm:px-6 sm:py-20 lg:px-8 lg:py-28"
        >
            <div className="mx-auto max-w-7xl">
                <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
                    <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-carbon-black/60">
                        Una primera aproximación
                    </p>
                    <h2 id="calculator-title" className="text-4xl font-light tracking-tight sm:text-5xl section-heading">
                        Calculadora
                    </h2>
                    <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-carbon-black/70 sm:text-lg">
                        Esta herramienta ofrece un cálculo demostrativo y no constituye
                        una cotización. Confirma precios, impuestos, acabados y transporte
                        con Mobelia.
                    </p>
                    <div aria-hidden="true" className="mx-auto mt-8 h-px w-16 bg-brass" />
                </header>

                <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
                    <section
                        aria-labelledby="products-title"
                        className="rounded-3xl border border-carbon-black/10 bg-white p-4 shadow-[0_12px_36px_rgba(28,22,17,0.05)] sm:rounded-4xl sm:p-7"
                    >
                        <h3 id="products-title" className="text-2xl font-medium tracking-tight">
                            Productos
                        </h3>
                        <div className="mt-6 space-y-6">
                            {items.map((item, index) => (
                                <fieldset
                                    key={item.id}
                                    className="grid gap-4 border-0 border-t border-carbon-black/10 p-0 pt-5 first:border-t-0 first:pt-0 sm:grid-cols-2"
                                >
                                    <legend className="pb-4 text-sm font-medium text-carbon-black/65">
                                        Producto {index + 1}
                                    </legend>
                                    <p className="m-0">
                                        <label className="text-sm font-medium text-carbon-black/75" htmlFor={`product-${item.id}`}>
                                            Producto
                                        </label>
                                        <ProductSelector
                                            id={`product-${item.id}`}
                                            className={controlClassName}
                                            value={item.product}
                                            onChange={(product) => updateItem(item.id, { product })}
                                        />
                                    </p>
                                    <p className="m-0">
                                        <label className="text-sm font-medium text-carbon-black/75" htmlFor={`quantity-${item.id}`}>
                                            Cantidad
                                        </label>
                                        <input
                                            id={`quantity-${item.id}`}
                                            className={controlClassName}
                                            type="number"
                                            min={0}
                                            step={1}
                                            value={item.quantity}
                                            onChange={(event) => {
                                                const value = event.currentTarget.valueAsNumber;
                                                updateItem(item.id, {
                                                    quantity: Number.isFinite(value) ? Math.max(0, Math.floor(value)) : 0,
                                                });
                                            }}
                                        />
                                    </p>
                                    <div className="flex flex-wrap gap-2 sm:col-span-2">
                                        <button
                                            type="button"
                                            className={actionClassName}
                                            aria-label={`Aumentar cantidad de ${item.product?.name ?? `producto ${index + 1}`}`}
                                            onClick={() => updateItem(item.id, { quantity: item.quantity + 1 })}
                                        >
                                            Aumentar
                                        </button>
                                        <button
                                            type="button"
                                            className={actionClassName}
                                            aria-label={`Reducir cantidad de ${item.product?.name ?? `producto ${index + 1}`}`}
                                            onClick={() => updateItem(item.id, { quantity: Math.max(0, item.quantity - 1) })}
                                        >
                                            Reducir
                                        </button>
                                        <button
                                            type="button"
                                            className={`${actionClassName} border-red-900/20 text-red-900 hover:border-red-900/40 hover:bg-red-950/5`}
                                            onClick={() => removeItem(item.id)}
                                        >
                                            Quitar producto {index + 1}
                                        </button>
                                    </div>
                                </fieldset>
                            ))}
                        </div>
                        <button
                            type="button"
                            className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full border border-brass bg-brass px-6 font-medium text-carbon-black transition-colors hover:border-[#dbb97f] hover:bg-[#dbb97f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-carbon-black motion-reduce:transition-none"
                            onClick={addItem}
                        >
                            Agregar producto
                        </button>
                    </section>

                    <div className="grid content-start gap-5 rounded-3xl border border-carbon-black/10 bg-white p-4 shadow-[0_12px_36px_rgba(28,22,17,0.05)] sm:rounded-4xl sm:p-7">
                        <section
                            aria-labelledby="order-summary-title"
                            className="pb-2"
                        >
                            <h3 id="order-summary-title" className="text-2xl font-medium tracking-tight">
                                Resumen del pedido
                            </h3>
                            {orderItems.length > 0 ? (
                                <ul className="mt-5 space-y-3">
                                    {orderItems.map((item) => (
                                        <li key={item.id} className="flex flex-wrap justify-between gap-x-4 gap-y-1 text-sm text-carbon-black/80">
                                            <span>{item.product.name} <span className="text-carbon-black/55">× {item.quantity}</span></span>
                                            <data className="font-medium text-carbon-black" value={item.quantity * item.product.price}>
                                                {currency.format(item.quantity * item.product.price)}
                                            </data>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="mt-5 text-sm text-carbon-black/65">
                                    Aún no hay productos seleccionados.
                                </p>
                            )}
                            <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 border-t border-carbon-black/10 pt-4 text-sm">
                                <dt className="text-carbon-black/60">Dirección</dt>
                                <dd className="m-0 min-w-0 break-words text-right text-carbon-black/85">{location || "Sin indicar"}</dd>
                                <dt className="text-carbon-black/60">Fecha solicitada</dt>
                                <dd className="m-0 text-right text-carbon-black/85">{timeOfDelivery || "Sin indicar"}</dd>
                            </dl>
                        </section>

                        <section
                            aria-labelledby="delivery-details-title"
                            className="border-t border-carbon-black/10 pt-6"
                        >
                            <h3 id="delivery-details-title" className="text-2xl font-medium tracking-tight">
                                Datos de entrega
                            </h3>
                            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                                <p className="m-0">
                                    <label className="text-sm font-medium text-carbon-black/75" htmlFor="order-location">
                                        Dirección
                                    </label>
                                    <input
                                        id="order-location"
                                        className={controlClassName}
                                        type="text"
                                        autoComplete="street-address"
                                        placeholder="Ingrese su dirección"
                                        value={location}
                                        onChange={(event) => setLocation(event.currentTarget.value)}
                                    />
                                </p>
                                <p className="m-0">
                                    <label className="text-sm font-medium text-carbon-black/75" htmlFor="delivery-date">
                                        Fecha solicitada
                                    </label>
                                    <input
                                        id="delivery-date"
                                        className={controlClassName}
                                        type="date"
                                        value={timeOfDelivery}
                                        onChange={(event) => setTimeOfDelivery(event.currentTarget.value)}
                                    />
                                </p>
                            </div>
                        </section>

                        <section
                            aria-labelledby="total-title"
                            className="border-t border-carbon-black/10 pt-6"
                        >
                            <h3 id="total-title" className="text-2xl font-medium tracking-tight">
                                Total estimado
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-carbon-black/70">
                                El valor final se confirma al cotizar tu proyecto.
                            </p>
                            <button
                                type="button"
                                className="mt-5 inline-flex min-h-12 w-full items-center justify-between gap-4 rounded-full bg-brass px-5 text-left font-medium text-carbon-black transition-colors hover:bg-[#dbb97f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-carbon-black motion-reduce:transition-none"
                                aria-expanded={totalToggle}
                                aria-controls="calculator-breakdown"
                                onClick={() => setTotalToggle((isExpanded) => !isExpanded)}
                            >
                                <span>{totalToggle ? "Ocultar desglose" : "Mostrar desglose"}</span>
                                <data className="font-semibold" value={total}>{currency.format(total)}</data>
                            </button>
                            <div
                                id="calculator-breakdown"
                                className="mt-5"
                                hidden={!totalToggle}
                            >
                                <dl className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-3 border-t border-carbon-black/10 pt-5 text-sm">
                                    <dt className="text-carbon-black/65">IVA estimado</dt><dd className="m-0 text-right">{currency.format(hasProducts ? iva : 0)}</dd>
                                    <dt className="text-carbon-black/65">Transporte estimado</dt><dd className="m-0 text-right">{currency.format(hasProducts ? transport : 0)}</dd>
                                    <dt className="text-carbon-black/65">Subtotal de productos</dt><dd className="m-0 text-right">{currency.format(productSubtotal)}</dd>
                                    <dt className="text-carbon-black/65">Descuento demostrativo</dt><dd className="m-0 text-right">{currency.format(hasProducts ? discount : 0)}</dd>
                                    <dt className="text-carbon-black/65">Pintura demostrativa</dt><dd className="m-0 text-right">{currency.format(hasProducts ? painting : 0)}</dd>
                                    <dt className="text-carbon-black/65">Tapicería demostrativa</dt><dd className="m-0 text-right">{currency.format(hasProducts ? upholstering : 0)}</dd>
                                </dl>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}
