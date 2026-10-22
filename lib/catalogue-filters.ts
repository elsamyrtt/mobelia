export const furnitureCategories = [
    { value: "seatings", label: "Asientos" },
    { value: "tables", label: "Mesas" },
    { value: "storage", label: "Almacenamiento" },
    { value: "bedroom", label: "Dormitorio" },
    { value: "office", label: "Oficina" },
] as const;

export const furnitureTypes = [
    { value: "office", label: "Oficina" },
    { value: "living_room", label: "Sala" },
    { value: "bedroom", label: "Habitación" },
    { value: "hospitality", label: "Hotelería" },
    { value: "restaurant", label: "Restaurante" },
    { value: "kitchen", label: "Cocina" },
] as const;

export type FurnitureCategory = (typeof furnitureCategories)[number]["value"];
export type FurnitureType = (typeof furnitureTypes)[number]["value"];

export type CatalogueFilters = {
    search: string;
    minimumPrice: number | null;
    maximumPrice: number | null;
    category: FurnitureCategory | "";
    type: FurnitureType | "";
};

type SearchParams = Record<string, string | string[] | undefined>;

function firstValue(value: string | string[] | undefined): string {
    return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

function parsePrice(value: string | string[] | undefined): number | null {
    const rawValue = firstValue(value);
    if (!rawValue) return null;

    const price = Number(rawValue);
    return Number.isFinite(price) && price >= 0 ? price : null;
}

export function parseCatalogueFilters(params: SearchParams): CatalogueFilters {
    const category = firstValue(params.category);
    const type = firstValue(params.type);
    const selectedCategory = furnitureCategories.find((option) => option.value === category)?.value ?? "";
    const selectedType = furnitureTypes.find((option) => option.value === type)?.value ?? "";

    return {
        search: firstValue(params.search).trim(),
        minimumPrice: parsePrice(params.minimumPrice),
        maximumPrice: parsePrice(params.maximumPrice),
        category: selectedCategory,
        type: selectedType,
    };
}
