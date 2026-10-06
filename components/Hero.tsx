import Link from "next/link";
import { Cormorant_Garamond, Figtree } from "next/font/google";
import HeroCanvas from "./HeroCanvas";
import styles from "@/styles/Hero.module.css";

const display = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400"],
    style: ["normal", "italic"],
    display: "swap",
});
const text = Figtree({ subsets: ["latin"], weight: ["400", "500"], display: "swap" });

export default function Hero(): React.JSX.Element {
    return (
        <section
            id="hero-track"
            className={`${styles.track} ${text.className}`}
            aria-labelledby="hero-title"
        >
            <div className={styles.stage}>
                <div className={styles.canvas} aria-hidden="true">
                </div>

                <div className={styles.veil} aria-hidden="true" />

                <div className={styles.content}>
                    <h1 id="hero-title" className={display.className}>
                        Muebles que elevan la experiencia de cada espacio
                    </h1>
                    <p>
                        Diseñamos muebles para hoteles, restaurantes y hogares que
                        buscan combinar elegancia, comodidad y durabilidad.
                    </p>
                    <nav aria-label="Acciones principales">
                        <ul>
                            <li>
                                <Link className={styles.primary} href="#catalogo">
                                    Explorar productos
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.ghost} href="#contacto">
                                    Consultar con Mobelia
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
}
