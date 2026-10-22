import type { CatalogueProduct } from "@/lib/catalogue-products";
import { businessWhatsAppNumber } from "@/lib/business";

export type QuoteLine = {
    product: CatalogueProduct;
    quantity: number;
};

export function buildWhatsAppMessageUrl(message: string): string | null {
    const trimmedMessage = message.trim();
    if (!trimmedMessage || !/^\d{8,15}$/.test(businessWhatsAppNumber)) return null;

    const url = new URL(`https://wa.me/${businessWhatsAppNumber}`);
    url.searchParams.set("text", trimmedMessage);
    return url.href;
}

export function buildQuoteWhatsAppUrl(items: QuoteLine[]): string | null {
    if (!items.length) return null;

    const productBlocks = items.map(({ product, quantity }, index) => {
        const details = [
            `*Producto ${index + 1}: ${product.title}*`,
            `- Cantidad: ${quantity}`,
            ...(product.materials.length
                ? [`- Materiales disponibles: ${product.materials.join(", ")}`]
                : []),
        ];
        return details.join("\n");
    });

    const message = [
        "¡Hola! 👋 Quiero solicitar una cotización de los siguientes muebles de su catálogo.",
        "",
        "🪑 *PRODUCTOS PARA COTIZAR*",
        "",
        ...productBlocks.flatMap((block, index) => index === 0 ? [block] : ["", block]),
        "",
        "Por favor, ¿podrían brindarme información sobre los precios, la disponibilidad, las opciones de personalización y los tiempos de fabricación y entrega?",
        "",
        "Quedo atento(a) a su asesoría. ¡Muchas gracias! 😊",
    ].join("\n");

    return buildWhatsAppMessageUrl(message);
}
