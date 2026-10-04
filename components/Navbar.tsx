import Image from "next/image";
import Link from "next/link";
import Logo_svg from "@/public/Logo_svg.svg";

const navigationLinks = [
    { href: "#catalogo", label: "Productos" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#proceso", label: "Proceso" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#calculadora", label: "Calculadora" },
    { href: "#contacto", label: "Contacto" },
];

export default function Navbar(): React.JSX.Element {
    return (
        <nav className="bg-[var(--color-carbon-black)]" aria-label="Navegación principal">
            <Link href="/" aria-label="Mobelia Studio, inicio">
                <Image alt="" src={Logo_svg} />
            </Link>
            <ul>
                {navigationLinks.map(({ href, label }) => (
                    <li key={href}>
                        <Link href={href} className="text-white hover:text-[var(--color-jasmine)]">
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
