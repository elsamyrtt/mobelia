import Link from "next/link";
import { businessPhoneNational } from "@/lib/business";
import { buildWhatsAppMessageUrl } from "@/lib/quote-message";

export default function Footer() {
  const whatsappUrl = buildWhatsAppMessageUrl("Hola Mobelia Studio, quiero información.");

  return (
    <footer className="border-t border-white/10 bg-carbon-black px-5 pt-12 pb-7 text-white/75 sm:px-8 sm:pt-16">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_1fr] lg:gap-16">
          <div className="max-w-md">
            <Link
              className="inline-flex items-baseline gap-2 text-white transition-colors duration-300 hover:text-brass focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
              href="/"
              aria-label="Mobelia Studio, inicio"
            >
              <span className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">Mobelia</span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">Studio</span>
            </Link>
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-white/70">
              Diseño para vivirlo. Muebles para hogares, hoteles y restaurantes con precisión, confort y carácter.
            </p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Explora
            </h2>
            <ul className="mt-4 space-y-1 text-sm font-medium text-white/75 sm:mt-5 sm:space-y-2">
              <li><Link className="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-brass" href="/catalogue">Catálogo</Link></li>
              <li><Link className="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-brass" href="/gallery">Proyectos</Link></li>
              <li><Link className="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-brass" href="/#nosotros">Nosotros</Link></li>
              <li><Link className="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-brass" href="/cart">Carrito de cotización</Link></li>
              <li><Link className="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-brass" href="/#calculadora">Calculadora</Link></li>
              <li><Link className="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-brass" href="/#contacto">Contacto</Link></li>
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Hablemos
            </h2>
            <ul className="mt-4 space-y-1 text-sm font-medium text-white/75 sm:mt-5 sm:space-y-2">
              <li>
                <a className="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-brass" href={`tel:+57${businessPhoneNational}`}>
                  +57 {businessPhoneNational}
                </a>
              </li>
              <li>
                {whatsappUrl && <a
                  className="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-brass"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>}
              </li>
              <li>
                <a
                  className="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-brass"
                  href="https://www.instagram.com/mobeliastudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram · @mobeliastudio
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/55 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <small>© {new Date().getFullYear()} Mobelia Studio</small>
          <small>Diseño para vivirlo.</small>
        </div>
      </div>
    </footer>
  );
}
