import Product from "@/components/Product";
import SillaPrueba from "@/public/Silla_Prueba.webp";

export default function Catalogue() {

    const featuredProducts = [
        {
            id: 1,
            src_image: SillaPrueba.src,
            title: "Silla Crossback",
            description: "Silla de madera maciza con diseño clásico y acabado natural.",
            materials: ["Madera maciza"],
            price: 89900,
        },
        {
            id: 2,
            src_image: SillaPrueba.src,
            title: "Mesa de Comedor Roble",
            description: "Mesa para seis personas elaborada en madera de roble.",
            materials: ["Madera de roble"],
            price: 1499900,
        },
        {
            id: 3,
            src_image: SillaPrueba.src,
            title: "Silla Nórdica",
            description: "Silla de estilo escandinavo con líneas simples y elegantes.",
            materials: ["Madera natural", "Tela"],
            price: 129900,
        },
        {
            id: 4,
            src_image: SillaPrueba.src,
            title: "Mesa Auxiliar Minimalista",
            description: "Mesa auxiliar compacta ideal para salas y dormitorios.",
            materials: ["Madera maciza", "Metal"],
            price: 249900,
        },
        {
            id: 5,
            src_image: SillaPrueba.src,
            title: "Banco Industrial",
            description: "Banco de diseño industrial ideal para barras y cocinas.",
            materials: ["Madera", "Acero"],
            price: 189900,
        },
        {
            id: 6,
            src_image: SillaPrueba.src,
            title: "Escritorio Roble",
            description: "Escritorio funcional con acabado natural para espacios de trabajo.",
            materials: ["Madera de roble"],
            price: 699900,
        },
        {
            id: 7,
            src_image: SillaPrueba.src,
            title: "Silla Tapizada",
            description: "Silla cómoda con asiento tapizado y estructura resistente.",
            materials: ["Madera", "Tela"],
            price: 329900,
        },
        {
            id: 8,
            src_image: SillaPrueba.src,
            title: "Mesa de Centro",
            description: "Mesa de centro con diseño contemporáneo para la sala.",
            materials: ["Madera maciza"],
            price: 459900,
        },
        {
            id: 9,
            src_image: SillaPrueba.src,
            title: "Biblioteca Moderna",
            description: "Estantería versátil para organizar libros y objetos decorativos.",
            materials: ["Madera", "Metal"],
            price: 579900,
        },
        {
            id: 10,
            src_image: SillaPrueba.src,
            title: "Silla Windsor",
            description: "Silla inspirada en el diseño clásico con respaldo de barrotes.",
            materials: ["Madera maciza"],
            price: 219900,
        },
        {
            id: 11,
            src_image: SillaPrueba.src,
            title: "Mesa de Noche",
            description: "Mesa de noche compacta y funcional para el dormitorio.",
            materials: ["Madera natural"],
            price: 279900,
        },
        {
            id: 12,
            src_image: SillaPrueba.src,
            title: "Comedor Contemporáneo",
            description: "Mesa de comedor de líneas modernas y acabados elegantes.",
            materials: ["Madera de roble", "Metal"],
            price: 1899900,
        },
    ];

    return (
        <section className="bg-carbon-black">
            <div className="grid catalogue-content">
                {
                    featuredProducts.map((product) => (
                        <Product
                            key={product.id}
                            name={product.title}
                            price={product.price}
                            description={product.description}
                            image={product.src_image}
                        />
                    ))
                }
            </div>
        </section>
    );
}