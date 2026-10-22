"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";
import { getCatalogueProduct } from "@/lib/catalogue-products";

export type CartEntry = {
    productId: number;
    quantity: number;
};

type CartContextValue = {
    items: CartEntry[];
    itemCount: number;
    hydrated: boolean;
    addProduct: (productId: number) => void;
    setQuantity: (productId: number, quantity: number) => void;
    removeProduct: (productId: number) => void;
};

const storageKey = "mobelia-quote-cart-v1";
const CartContext = createContext<CartContextValue | null>(null);

function parseCart(value: string): CartEntry[] {
    const parsed: unknown = JSON.parse(value);
    if (!Array.isArray(parsed)) {
        throw new TypeError("El carrito guardado no tiene un formato válido.");
    }

    const quantities = new Map<number, number>();
    for (const entry of parsed) {
        if (
            typeof entry !== "object"
            || entry === null
            || !("productId" in entry)
            || !("quantity" in entry)
            || typeof entry.productId !== "number"
            || !Number.isSafeInteger(entry.productId)
            || !Number.isSafeInteger(entry.quantity)
            || typeof entry.quantity !== "number"
            || entry.quantity < 1
        ) {
            throw new TypeError("El carrito guardado contiene un artículo inválido.");
        }
        if (!getCatalogueProduct(String(entry.productId))) {
            console.warn(`Se omitió el producto obsoleto ${entry.productId} del carrito.`);
            continue;
        }
        quantities.set(
            entry.productId,
            (quantities.get(entry.productId) ?? 0) + entry.quantity,
        );
    }

    return Array.from(quantities, ([productId, quantity]) => ({ productId, quantity }));
}

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartEntry[]>([]);
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        const timeoutId = window.setTimeout(() => {
            try {
                const savedCart = window.localStorage.getItem(storageKey);
                if (savedCart) setItems(parseCart(savedCart));
            } catch (error) {
                console.error("No se pudo cargar el carrito guardado.", error);
                try {
                    window.localStorage.removeItem(storageKey);
                } catch (storageError) {
                    console.error("No se pudo limpiar el carrito inválido.", storageError);
                }
            } finally {
                setHydrated(true);
            }
        }, 0);

        return () => window.clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        if (!hydrated) return;

        try {
            window.localStorage.setItem(storageKey, JSON.stringify(items));
        } catch (error) {
            console.error("No se pudo guardar el carrito en este dispositivo.", error);
        }
    }, [hydrated, items]);

    useEffect(() => {
        const syncCart = (event: StorageEvent) => {
            if (event.key !== storageKey) return;
            if (event.newValue === null) {
                setItems([]);
                return;
            }
            try {
                setItems(parseCart(event.newValue));
            } catch (error) {
                console.error("No se pudo sincronizar el carrito desde otra pestaña.", error);
            }
        };

        window.addEventListener("storage", syncCart);
        return () => window.removeEventListener("storage", syncCart);
    }, []);

    const addProduct = useCallback((productId: number) => {
        if (!getCatalogueProduct(String(productId))) {
            throw new RangeError(`No existe el producto ${productId}.`);
        }
        setItems((current) => {
            const found = current.some((item) => item.productId === productId);
            return found
                ? current.map((item) => item.productId === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item)
                : [...current, { productId, quantity: 1 }];
        });
    }, []);

    const setQuantity = useCallback((productId: number, quantity: number) => {
        if (!Number.isSafeInteger(quantity) || quantity < 0) {
            throw new RangeError("La cantidad debe ser un entero no negativo.");
        }
        setItems((current) => quantity === 0
            ? current.filter((item) => item.productId !== productId)
            : current.map((item) => item.productId === productId
                ? { ...item, quantity }
                : item));
    }, []);

    const removeProduct = useCallback((productId: number) => {
        setItems((current) => current.filter((item) => item.productId !== productId));
    }, []);

    const value = useMemo<CartContextValue>(() => ({
        items,
        itemCount: items.reduce((count, item) => count + item.quantity, 0),
        hydrated,
        addProduct,
        setQuantity,
        removeProduct,
    }), [items, hydrated, addProduct, setQuantity, removeProduct]);

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
    const cart = useContext(CartContext);
    if (!cart) throw new Error("useCart debe usarse dentro de CartProvider.");
    return cart;
}
