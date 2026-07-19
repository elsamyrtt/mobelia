import Image from "next/image";
import Logo_svg from "@/public/Logo_svg.svg";
import Link from "next/link";
export default function Hero() {
    return (
        <section>
            <div>
                <div>
                    <h1>Muebles que elevan la experiencia de cada espacio</h1>
                    <p>Diseñamos muebles para hoteles, restaurantes y hogares que buscan combinar elegancia, comodidad y durabilidad.</p>
                </div>
                <Link href="/catalago">Ver catalogo</Link>
                <Link href="/asesoria">Contactar con un asesor</Link>
            </div>
            <Image
                alt="Sillas y comedor Mobelia de diseño moderno para hoteles, restaurantes y hogares"
                src={Logo_svg} />
        </section>
    );
}