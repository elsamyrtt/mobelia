import SillaPrueba from "@/public/Silla_Prueba.webp";
import type { FurnitureCategory, FurnitureType } from "@/lib/catalogue-filters";

export type CatalogueProduct = {
    id: number;
    src_image: string;
    title: string;
    description: string;
    materials: string[];
    price: number;
    category: FurnitureCategory;
    types: FurnitureType[];
};

export const catalogueProducts: CatalogueProduct[] = [
    {
        id: 1,
        src_image: SillaPrueba.src,
        title: "Silla Crossback",
        description: "Silla de madera maciza con diseño clásico y acabado natural.",
        materials: ["Madera maciza"],
        price: 89900,
        category: "seatings",
        types: ["restaurant", "hospitality", "kitchen", "living_room"],
    },
    {
        id: 2,
        src_image: SillaPrueba.src,
        title: "Mesa de Comedor Roble",
        description: "Mesa para seis personas elaborada en madera de roble.",
        materials: ["Madera de roble"],
        price: 1499900,
        category: "tables",
        types: ["restaurant", "hospitality", "kitchen"],
    },
    {
        id: 3,
        src_image: SillaPrueba.src,
        title: "Silla Nórdica",
        description: "Silla de estilo escandinavo con líneas simples y elegantes.",
        materials: ["Madera natural", "Tela"],
        price: 129900,
        category: "seatings",
        types: ["living_room", "hospitality"],
    },
    {
        id: 4,
        src_image: SillaPrueba.src,
        title: "Mesa Auxiliar Minimalista",
        description: "Mesa auxiliar compacta ideal para salas y dormitorios.",
        materials: ["Madera maciza", "Metal"],
        price: 249900,
        category: "tables",
        types: ["living_room", "bedroom"],
    },
    {
        id: 5,
        src_image: SillaPrueba.src,
        title: "Banco Industrial",
        description: "Banco de diseño industrial ideal para barras y cocinas.",
        materials: ["Madera", "Acero"],
        price: 189900,
        category: "seatings",
        types: ["kitchen", "restaurant"],
    },
    {
        id: 6,
        src_image: SillaPrueba.src,
        title: "Escritorio Roble",
        description: "Escritorio funcional con acabado natural para espacios de trabajo.",
        materials: ["Madera de roble"],
        price: 699900,
        category: "office",
        types: ["office"],
    },
    {
        id: 7,
        src_image: SillaPrueba.src,
        title: "Silla Tapizada",
        description: "Silla cómoda con asiento tapizado y estructura resistente.",
        materials: ["Madera", "Tela"],
        price: 329900,
        category: "seatings",
        types: ["office", "restaurant", "hospitality", "living_room"],
    },
    {
        id: 8,
        src_image: SillaPrueba.src,
        title: "Mesa de Centro",
        description: "Mesa de centro con diseño contemporáneo para la sala.",
        materials: ["Madera maciza"],
        price: 459900,
        category: "tables",
        types: ["living_room"],
    },
    {
        id: 9,
        src_image: SillaPrueba.src,
        title: "Biblioteca Moderna",
        description: "Estantería versátil para organizar libros y objetos decorativos.",
        materials: ["Madera", "Metal"],
        price: 579900,
        category: "storage",
        types: ["office", "bedroom", "living_room"],
    },
    {
        id: 10,
        src_image: SillaPrueba.src,
        title: "Silla Windsor",
        description: "Silla inspirada en el diseño clásico con respaldo de barrotes.",
        materials: ["Madera maciza"],
        price: 219900,
        category: "seatings",
        types: ["restaurant", "kitchen", "living_room"],
    },
    {
        id: 11,
        src_image: SillaPrueba.src,
        title: "Mesa de Noche",
        description: "Mesa de noche compacta y funcional para el dormitorio.",
        materials: ["Madera natural"],
        price: 279900,
        category: "bedroom",
        types: ["bedroom"],
    },
    {
        id: 12,
        src_image: SillaPrueba.src,
        title: "Comedor Contemporáneo",
        description: "Mesa de comedor de líneas modernas y acabados elegantes.",
        materials: ["Madera de roble", "Metal"],
        price: 1899900,
        category: "tables",
        types: ["restaurant", "hospitality", "kitchen"],
    },
];

export function getCatalogueProduct(id: string): CatalogueProduct | undefined {
    const numericId = Number(id);
    if (!Number.isSafeInteger(numericId) || numericId < 1) return undefined;

    return catalogueProducts.find((product) => product.id === numericId);
}
