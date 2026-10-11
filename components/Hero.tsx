import Link from "next/link";

export default function Hero(): React.JSX.Element {
    return (
        <section
            id="hero-track"
            className="relative min-h-[clamp(19rem,55svh,31rem)] overflow-hidden bg-[radial-gradient(ellipse_at_76%_28%,rgb(255_255_255_/_18%),transparent_43%),radial-gradient(ellipse_at_8%_100%,rgb(255_255_255_/_7%),transparent_54%),linear-gradient(135deg,#55585b_0%,#34373a_54%,#202224_100%)] text-ink md:min-h-[min(82svh,52rem)]"
            aria-labelledby="hero-title"
        >
            <div className="relative isolate min-h-[clamp(19rem,55svh,31rem)] overflow-hidden md:min-h-[min(82svh,52rem)]">
                <div
                    className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,rgb(10_11_12_/_38%)_0%,rgb(10_11_12_/_12%)_76%,transparent_100%),linear-gradient(0deg,rgb(10_11_12_/_30%)_0%,transparent_62%)]"
                    aria-hidden="true"
                />

                <div className="absolute inset-0 z-20 grid content-end justify-items-start gap-3 px-[5vw] pb-[5svh] text-left sm:gap-4 md:w-[min(68vw,52rem)] md:content-center md:px-[clamp(2rem,7vw,7rem)] md:py-8">
                    <h1
                        id="hero-title"
                        className="m-0 max-w-[18ch] text-balance text-[clamp(1.55rem,7.2vw,4.85rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-white drop-shadow-[0_0px_12px_rgb(255_255_255_/_28%)] sm:max-w-[15ch]"
                    >
                        Muebles que elevan la experiencia de cada espacio
                    </h1>
                    <p className="m-0 max-w-[42ch] text-pretty text-[clamp(0.9rem,1.25vw,1.1rem)] leading-relaxed text-white/90">
                        Diseñamos muebles para hoteles, restaurantes y hogares que
                        buscan combinar elegancia, comodidad y durabilidad.
                    </p>
                    <nav aria-label="Acciones principales">
                        <ul className="m-0 flex w-full list-none flex-row flex-wrap gap-2 p-0 sm:w-auto sm:gap-3">
                            <li>
                                <Link
                                    className="button-primary min-h-11 px-4 text-[0.82rem] sm:px-6 sm:text-[0.96rem]"
                                    href="#catalogo"
                                >
                                    Explorar productos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="button-secondary min-h-11 px-4 text-[0.82rem] sm:px-6 sm:text-[0.96rem]"
                                    href="#contacto"
                                >
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
