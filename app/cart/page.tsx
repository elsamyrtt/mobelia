import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import QuoteCart from "@/components/QuoteCart";

export const metadata: Metadata = {
    title: "Carrito de cotización",
    description: "Revisa los muebles seleccionados y solicita una cotización personalizada por WhatsApp.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function CartPage() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main id="contenido-principal">
                <QuoteCart />
            </main>
            <Footer />
        </>
    );
}
