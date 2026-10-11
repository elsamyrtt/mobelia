export default function About() {
    return (
        <section
            aria-labelledby="about-title"
            id="nosotros"
            className="bg-[linear-gradient(180deg,var(--color-ghost-white),#eee3d4)] px-5 py-16 text-carbon-black sm:px-6 sm:py-20 lg:px-8 lg:py-28"
        >
            <div className="mx-auto max-w-7xl">
                <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
                    <p className="section-kicker">
                        Diseño pensado para durar
                    </p>
                    <h2
                        id="about-title"
                        className="section-heading"
                    >
                        Mobelia Studio
                    </h2>
                    <p className="section-copy mx-auto mt-5">
                        Creamos piezas y espacios que se sienten propios, con
                        calidad en cada detalle y una estética que permanece.
                    </p>
                    <div
                        aria-hidden="true"
                        className="section-divider mx-auto"
                    />
                </header>

                <div className="mobile-two-col grid gap-3 md:grid-cols-3 md:gap-6">
                    <article className="rounded-2xl border border-white/70 bg-white/70 p-3 shadow-[0_12px_36px_rgba(28,22,17,0.06)] backdrop-blur-sm sm:rounded-3xl sm:p-7">
                        <span className="text-sm font-medium tracking-[0.16em] text-brass">
                            01
                        </span>
                        <h3 className="mt-3 text-base font-medium leading-tight tracking-tight text-carbon-black sm:mt-8 sm:text-2xl">
                            ¿Quiénes somos?
                        </h3>
                        <p className="mt-2 text-xs leading-[1.5] text-carbon-black/75 sm:mt-4 sm:text-base sm:leading-relaxed">
                            En Mobelia Studio diseñamos espacios y mobiliario que
                            combinan funcionalidad, estética y personalidad.
                            Creemos que cada proyecto debe reflejar el estilo y
                            las necesidades de quienes lo habitan.
                        </p>
                    </article>

                    <article className="rounded-2xl border border-white/70 bg-white/70 p-3 shadow-[0_12px_36px_rgba(28,22,17,0.06)] backdrop-blur-sm sm:rounded-3xl sm:p-7">
                        <span className="text-sm font-medium tracking-[0.16em] text-brass">
                            02
                        </span>
                        <h3 className="mt-3 text-base font-medium leading-tight tracking-tight text-carbon-black sm:mt-8 sm:text-2xl">
                            ¿Qué hacemos?
                        </h3>
                        <p className="mt-2 text-xs leading-[1.5] text-carbon-black/75 sm:mt-4 sm:text-base sm:leading-relaxed">
                            Diseñamos muebles a medida, desarrollamos proyectos
                            de interiorismo y ofrecemos asesoría para transformar
                            hogares, oficinas y espacios comerciales.
                        </p>
                    </article>

                    <article className="rounded-2xl border border-white/70 bg-white/70 p-3 shadow-[0_12px_36px_rgba(28,22,17,0.06)] backdrop-blur-sm sm:rounded-3xl sm:p-7">
                        <span className="text-sm font-medium tracking-[0.16em] text-brass">
                            03
                        </span>
                        <h3 className="mt-3 text-base font-medium leading-tight tracking-tight text-carbon-black sm:mt-8 sm:text-2xl">
                            Nuestra filosofía
                        </h3>
                        <p className="mt-2 text-xs leading-[1.5] text-carbon-black/75 sm:mt-4 sm:text-base sm:leading-relaxed">
                            Cada detalle importa. Trabajamos con materiales de
                            calidad, procesos cuidadosamente seleccionados y un
                            diseño atemporal que perdure con el paso del tiempo.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}
