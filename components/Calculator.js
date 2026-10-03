'use client'
import React, { useState } from 'react';
import Image from "next/image";
import ProductSelector from "./ProductSelector";
import Button from "./Button";

export default function Calculator() {

    const calcPrice = (Product, Quantity, Location, TimeOfDelivery) => {
        //Necesito crear esta funcion a fondo (DB)   
        const iva = 50000;
        const transport = 230000;
        const productPrice = 200000;
        const discount = 200000;
        const pinture = 500000;
        const upholster = 200000;
        const total = productPrice * Quantity + iva + transport - discount + pinture + upholster;
        return { total, iva, transport, productPrice, discount, pinture, upholster };
    }

    const [quantity, setQuantity] = useState(0);
    const [location, setLocation] = useState("");
    const [totalToggle, setTotalToggle] = useState(false);
    const [product, setProduct] = useState("Ninguno");
    const [timeOfDelivery, setTimeOfDelivery] = useState("");


    return (
        <section>
            <h1>Calculadora</h1>
            <div>
                <div>
                    <h2>Pedido</h2>
                    <h3>Producto: {product} Cantidad: {quantity}</h3>
                    <p>Direccion: {location}</p>
                    <p>Tiempo de entrega: {timeOfDelivery}</p>
                </div>
                <div>
                    {Array.from({ length: productSelector.length }, (_, index) => (
                        <div key={index}>
                            <h2>Producto {index + 1}: <ProductSelector value={product} onChange={setProduct} /></h2>
                            <div>
                                <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value) || 0)} />
                                <Button className="btn-calculator" onClick={() => setQuantity(quantity + 1)}>+</Button>
                                <Button className="btn-calculator" onClick={() => setQuantity(quantity - 1)}>-</Button>
                            </div>
                        </div>
                    ))
                    }
                </div>
                <div>
                    <h2>Direccion:</h2>
                    <input type="text" placeholder="Ingrese su direccion" value={location} onChange={(e) => setLocation(e.target.value)} />
                </div>
                <div>
                    <h2>Tiempo de entrega:</h2>
                    <input type="date" value={timeOfDelivery} onChange={(e) => setTimeOfDelivery(e.target.value)} />
                </div>
                <div>
                    <h3 onClick={setTotalToggle(!totalToggle)}>Total: ${calcPrice(product, quantity, location, timeOfDelivery).total}</h3>
                    <div display={totalToggle ? "block" : "none"}>
                        <h4>IVA: ${calcPrice(product, quantity, location, timeOfDelivery).iva}</h4>
                        <h4>Transporte: ${calcPrice(product, quantity, location, timeOfDelivery).transport}</h4>
                        <h4>Precio del producto por unidad: ${calcPrice(product, quantity, location, timeOfDelivery).productPrice}</h4>
                        <h4>Precio total de {quantity} unidades: ${calcPrice(product, quantity, location, timeOfDelivery).productPrice * quantity}</h4>
                        <h4>Descuento: ${calcPrice(product, quantity, location, timeOfDelivery).discount}</h4>
                        <h4>Pintura: ${calcPrice(product, quantity, location, timeOfDelivery).pinture}</h4>
                        <h4>Tapicería: ${calcPrice(product, quantity, location, timeOfDelivery).upholster}</h4>
                    </div>
                </div>
            </div>
        </section>
    );
}