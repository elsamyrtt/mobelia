"use client";

import { useCart } from "@/components/CartProvider";

type AddToCartButtonProps = {
    productId: number;
    className?: string;
};

export default function AddToCartButton({ productId, className }: AddToCartButtonProps) {
    const { addProduct } = useCart();

    return (
        <button
            className={className}
            type="button"
            onClick={() => addProduct(productId)}
        >
            Agregar al carrito
        </button>
    );
}
