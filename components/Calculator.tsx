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
        <section aria-labelledby="calculator-title" id="calculadora">
            <h2 id="calculator-title">Calculadora</h2>
            <p>
                Esta herramienta ofrece un cálculo demostrativo y no constituye
                una cotización. Confirma precios, impuestos, acabados y transporte
                con Mobelia.
            </p>
            <section aria-labelledby="order-summary-title">
                <h3 id="order-summary-title">Resumen del pedido</h3>
                {orderItems.length > 0 ? (
                    <ul>
                        {orderItems.map((item) => (
                            <li key={item.id}>
                                {item.product.name} — Cantidad: {item.quantity} — Subtotal:{" "}
                                <data value={item.quantity * item.product.price}>
                                    {currency.format(item.quantity * item.product.price)}
                                </data>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay productos seleccionados.</p>
                )}
                <dl>
                    <dt>Dirección</dt>
                    <dd>{location || "Sin indicar"}</dd>
                    <dt>Fecha solicitada</dt>
                    <dd>{timeOfDelivery || "Sin indicar"}</dd>
                </dl>
            </section>
            <section aria-labelledby="products-title">
                <h3 id="products-title">Productos</h3>
                {items.map((item, index) => (
                    <fieldset key={item.id}>
                        <legend>Producto {index + 1}</legend>
                        <p>
                            <label htmlFor={`product-${item.id}`}>Producto</label>{" "}
                            <ProductSelector
                                id={`product-${item.id}`}
                                value={item.product}
                                onChange={(product) => updateItem(item.id, { product })}
                            />
                        </p>
                        <p>
                            <label htmlFor={`quantity-${item.id}`}>Cantidad</label>{" "}
                            <input
                                id={`quantity-${item.id}`}
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
                        <button
                            type="button"
                            className="button btn-calculator"
                            aria-label={`Aumentar cantidad de ${item.product?.name ?? `producto ${index + 1}`}`}
                            onClick={() => updateItem(item.id, { quantity: item.quantity + 1 })}
                        >
                            Aumentar cantidad
                        </button>
                        <button
                            type="button"
                            className="button btn-calculator"
                            aria-label={`Reducir cantidad de ${item.product?.name ?? `producto ${index + 1}`}`}
                            onClick={() => updateItem(item.id, { quantity: Math.max(0, item.quantity - 1) })}
                        >
                            Reducir cantidad
                        </button>
                        <button
                            type="button"
                            className="button btn-calculator"
                            onClick={() => removeItem(item.id)}
                        >
                            Quitar producto {index + 1}
                        </button>
                    </fieldset>
                ))}
                <button type="button" className="button btn-calculator" onClick={addItem}>
                    Agregar producto
                </button>
            </section>
            <section aria-labelledby="delivery-details-title">
                <h3 id="delivery-details-title">Datos de entrega</h3>
                <p>
                    <label htmlFor="order-location">Dirección</label>{" "}
                    <input
                        id="order-location"
                        type="text"
                        autoComplete="street-address"
                        placeholder="Ingrese su dirección"
                        value={location}
                        onChange={(event) => setLocation(event.currentTarget.value)}
                    />
                </p>
                <p>
                    <label htmlFor="delivery-date">Fecha solicitada</label>{" "}
                    <input
                        id="delivery-date"
                        type="date"
                        value={timeOfDelivery}
                        onChange={(event) => setTimeOfDelivery(event.currentTarget.value)}
                    />
                </p>
            </section>
            <section aria-labelledby="total-title">
                <h3 id="total-title">Total estimado</h3>
                <button
                    type="button"
                    className="button btn-calculator"
                    aria-expanded={totalToggle}
                    aria-controls="calculator-breakdown"
                    onClick={() => setTotalToggle((isExpanded) => !isExpanded)}
                >
                    {totalToggle ? "Ocultar" : "Mostrar"} desglose: {currency.format(total)}
                </button>
                <div id="calculator-breakdown" hidden={!totalToggle}>
                    <dl>
                        <dt>IVA estimado</dt><dd>{currency.format(hasProducts ? iva : 0)}</dd>
                        <dt>Transporte estimado</dt><dd>{currency.format(hasProducts ? transport : 0)}</dd>
                        <dt>Subtotal de productos</dt><dd>{currency.format(productSubtotal)}</dd>
                        <dt>Descuento demostrativo</dt><dd>{currency.format(hasProducts ? discount : 0)}</dd>
                        <dt>Pintura demostrativa</dt><dd>{currency.format(hasProducts ? painting : 0)}</dd>
                        <dt>Tapicería demostrativa</dt><dd>{currency.format(hasProducts ? upholstering : 0)}</dd>
                    </dl>
                </div>
            </section>
        </section>
    );
}
