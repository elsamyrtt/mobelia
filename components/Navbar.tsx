import Image from "next/image";
import Link from "next/link";
import Logo_svg from "@/public/Logo_svg.svg";

const navigationLinks = [
    { href: "#catalogo", label: "Catálogo" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#testimonios", label: "Clientes" },
    { href: "#contacto", label: "Contacto" }
];

export default function Navbar(): React.JSX.Element {
    return (
        <nav
            className="site-nav sticky top-0 w-full text-white"
            aria-label="Navegación principal"
        >
            <div className="site-nav__inner mx-auto grid h-18 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                <Link
                    href="/"
                    aria-label="Mobelia Studio, inicio"
                    className="site-nav__logo rounded-2xl bg-(--color-ghost-white) p-1.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-jasmine"
                >
                    <Image alt="" src={Logo_svg} width={40} height={40} />
                </Link>
                <ul className="site-nav__links flex items-center justify-center font-medium">
                    {navigationLinks.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className="site-nav__link relative inline-flex whitespace-nowrap py-2 text-white/80 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-jasmine"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
