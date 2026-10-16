export default function Search() {
    return (
        <section className="search-section" aria-labelledby="search-title">
            <div className="search-content">
                <p className="section-kicker">Catálogo Mobelia</p>
                <h1 className="section-heading" id="search-title">Encuentra lo que imaginas</h1>
                <p className="search-description">
                    Explora muebles y descubre piezas para transformar tu espacio.
                </p>
                <search className="search">
                    <form action="/search" method="get" className="search-form">
                        <label className="search-label" htmlFor="catalogue-search">
                            ¿Qué estás buscando?
                        </label>
                        <div className="search-control">
                            <svg
                                className="search-icon"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <circle cx="10.8" cy="10.8" r="6.8" />
                                <path d="m16 16 4.2 4.2" />
                            </svg>
                            <input
                                id="catalogue-search"
                                name="search"
                                type="search"
                                placeholder="Ej. sofá, comedor, biblioteca..."
                            />
                            <button className="button-primary search-submit" type="submit">
                                Buscar
                                <span aria-hidden="true">→</span>
                            </button>
                        </div>
                    </form>
                </search>
            </div>
        </section>
    );
}