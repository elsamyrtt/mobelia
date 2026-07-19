import Image from "next/image";
import Link from "next/link";
import Logo_svg from "@/public/Logo_svg.svg"

export default function Navbar() {
    return (
        <nav>
            <Link href="/">
                <Image
                    alt="Logo de Mobelia"
                    src={Logo_svg}
                />
            </Link>
            <div>
                <ul>
                    <Link href="/salas">Salas</Link>
                    <Link href="/exteriores">Exteriores</Link>
                    <Link href="/oficinas">Oficinas</Link>
                    <Link href="/comedores">Comedores</Link>
                    <Link href="/otros">Otros</Link>
                </ul>
            </div>
            <div>
                <form action="/search" method="GET">
                    <input type="text" id="search-text" name="searchText" placeholder="Buscar..." />
                    <button type="submit">
                        <Image
                            src={Logo_svg}
                            alt="Buscar productos"
                        />
                    </button>
                </form>
            </div>
            <div>
                <ul>
                    <Link href="/novedades">Novedades</Link>
                    <Link href="/ofertas">Ofertas</Link>
                </ul>
            </div>
        </nav>
    );
}