import Product from "@/components/Product";
import { catalogueProducts } from "@/lib/catalogue-products";
import type { CatalogueFilters } from "@/lib/catalogue-filters";

type CatalogueProps = {
    filters: CatalogueFilters;
};

export default function Catalogue({ filters }: CatalogueProps) {
    const normalizedSearch = filters.search.toLocaleLowerCase("es-CO");
    const filteredProducts = catalogueProducts.filter((product) => {
        const matchesSearch = !normalizedSearch
            || `${product.title} ${product.description}`.toLocaleLowerCase("es-CO").includes(normalizedSearch);
        const matchesMinimum = filters.minimumPrice === null || product.price >= filters.minimumPrice;
        const matchesMaximum = filters.maximumPrice === null || product.price <= filters.maximumPrice;
        const matchesCategory = !filters.category || product.category === filters.category;
        const matchesType = !filters.type || product.types.includes(filters.type);

        return matchesSearch && matchesMinimum && matchesMaximum && matchesCategory && matchesType;
    });

    return (
        <section className="!bg-carbon-black/98.5">
            <div className="catalogue-results">
                <p className="catalogue-result-count" aria-live="polite">
                    {filteredProducts.length} {filteredProducts.length === 1 ? "mueble encontrado" : "muebles encontrados"}
                </p>
                {filteredProducts.length > 0 ? (
                    <div className="grid catalogue-content">
                        {filteredProducts.map((product) => (
                            <Product
                                key={product.id}
                                id={product.id}
                                name={product.title}
                                price={product.price}
                                description={product.description}
                                image={product.src_image}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="catalogue-empty">No encontramos muebles con esos filtros. Prueba con otros criterios.</p>
                )}
            </div>
        </section>
    );
}