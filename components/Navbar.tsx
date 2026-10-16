import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.png";

const navigationLinks = [
    { href: "#catalogo", label: "Catálogo" },
    { href: "#gallery", label: "Trabajos" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" }
];

export default function Navbar(): React.JSX.Element {
    return (
        <nav
            className="relative w-full bg-carbon-black/95 text-white backdrop-blur-xl"
            aria-label="Navegación principal"
        >
            <div className="mx-auto grid min-h-[4.5rem] max-w-7xl grid-cols-[auto_1fr] items-center px-3 sm:gap-4 sm:px-6 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:px-8">
                <Link
                    href="/"
                    aria-label="Mobelia Studio, inicio"
                    className="inline-flex min-h-18 min-w-18 items-center justify-self-start transition-transform duration-300 hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass motion-reduce:transition-none"
                >
                    <Image className="p-0 block size-17 object-cover" alt="" src={Logo} width={720} height={1280} />
                </Link>
                <ul className="col-start-2 row-start-1 flex items-center justify-end gap-[clamp(0.3rem,2.4vw,2rem)] text-[clamp(0.66rem,0.35vw+0.62rem,0.875rem)] font-medium md:col-start-2 md:justify-center">
                    {navigationLinks.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className="group relative inline-flex min-h-11 items-center whitespace-nowrap px-1 text-white/80 transition-[color,transform] duration-300 hover:-translate-y-0.5 hover:text-brass focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass motion-reduce:transition-none sm:px-2"
                            >
                                {label}
                                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-center scale-x-0 rounded-full bg-brass transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
