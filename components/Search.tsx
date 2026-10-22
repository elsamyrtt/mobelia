"use client";

import { useState } from "react";
import {
    furnitureCategories,
    furnitureTypes,
    type CatalogueFilters,
} from "@/lib/catalogue-filters";

type SearchProps = {
    filters: CatalogueFilters;
};

export default function Search({ filters }: SearchProps) {
    const hasActiveFilters = filters.minimumPrice !== null
        || filters.maximumPrice !== null
        || Boolean(filters.category)
        || Boolean(filters.type);
    const [filtersOpen, setFiltersOpen] = useState(hasActiveFilters);

    return (
        <section className="search-section" aria-labelledby="search-title">
            <div className="search-content">
                <p className="section-kicker">Catálogo Mobelia</p>
                <h1 className="section-heading" id="search-title">Encuentra lo que imaginas</h1>
                <p className="search-description">
                    Explora muebles y descubre piezas para transformar tu espacio.
                </p>
                <search className="search">
                    <form action="/catalogue" method="get" className="search-form">
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
                                defaultValue={filters.search}
                            />
                            <button className="button-primary search-submit" type="submit">
                                Buscar
                                <span aria-hidden="true">→</span>
                            </button>
                        </div>
                        <button
                            className="filter-toggle"
                            type="button"
                            aria-expanded={filtersOpen}
                            aria-controls="catalogue-filters"
                            onClick={() => setFiltersOpen((isOpen) => !isOpen)}
                        >
                            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                                <path d="M4 7h16M7 12h10m-7 5h4" />
                                <circle cx="8" cy="7" r="1.5" />
                                <circle cx="15" cy="12" r="1.5" />
                                <circle cx="12" cy="17" r="1.5" />
                            </svg>
                            Filtros
                            <span aria-hidden="true">{filtersOpen ? "−" : "+"}</span>
                        </button>
                        <div
                            className="catalogue-filters"
                            id="catalogue-filters"
                            hidden={!filtersOpen}
                        >
                            <label>
                                Precio mínimo
                                <input
                                    name="minimumPrice"
                                    type="number"
                                    min="0"
                                    step="1000"
                                    placeholder="Sin mínimo"
                                    defaultValue={filters.minimumPrice ?? ""}
                                />
                            </label>
                            <label>
                                Precio máximo
                                <input
                                    name="maximumPrice"
                                    type="number"
                                    min="0"
                                    step="1000"
                                    placeholder="Sin máximo"
                                    defaultValue={filters.maximumPrice ?? ""}
                                />
                            </label>
                            <label>
                                Tipo de mueble
                                <select name="category" defaultValue={filters.category}>
                                    <option value="">Todos los muebles</option>
                                    {furnitureCategories.map((category) => (
                                        <option key={category.value} value={category.value}>
                                            {category.label}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <label>
                                Espacio
                                <select name="type" defaultValue={filters.type}>
                                    <option value="">Todos los espacios</option>
                                    {furnitureTypes.map((type) => (
                                        <option key={type.value} value={type.value}>
                                            {type.label}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <div className="catalogue-filter-actions">
                                <button className="button-primary filter-submit" type="submit">
                                    Aplicar filtros
                                </button>
                                <a className="filter-clear" href="/catalogue">
                                    Limpiar filtros
                                </a>
                            </div>
                        </div>
                    </form>
                </search>
            </div>
        </section>
    );
}