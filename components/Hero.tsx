import Image from "next/image";
import Link from "next/link";
import Logo_svg from "@/public/Logo_svg.svg";

export default function Hero(): React.JSX.Element {
    return (
        <section aria-labelledby="hero-title">
            <div>
                <h1 id="hero-title">Muebles que elevan la experiencia de cada espacio</h1>
                <p>
                    Diseñamos muebles para hoteles, restaurantes y hogares que
                    buscan combinar elegancia, comodidad y durabilidad.
                </p>
                <p>
                    Conoce los productos destacados o conversa con el equipo de
                    Mobelia sobre tu proyecto.
                </p>
                <nav aria-label="Acciones principales">
                    <ul>
                        <li><Link href="#catalogo">Explorar productos</Link></li>
                        <li><Link href="#contacto">Consultar con Mobelia</Link></li>
                    </ul>
                </nav>
            </div>
            <Image alt="Logotipo de Mobelia Studio" src={Logo_svg} priority />
        </section>
    );
}
