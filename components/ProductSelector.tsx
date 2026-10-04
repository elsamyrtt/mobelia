import Product, { type ProductCategory } from "@/models/Product";

type ProductSelectorProps = {
    id: string;
    value: Product | null;
    onChange: (value: Product | null) => void;
};

const productOptions: { name: string; category: ProductCategory }[] = [
    { name: "Silla", category: "seatings" },
    { name: "Mesa", category: "tables" },
    { name: "Sofá", category: "seatings" },
    { name: "Cama", category: "bedroom" },
    { name: "Estantería", category: "storage" },
];

export const products = productOptions.map(({ name, category }) =>
    new Product({
        id: name.toLocaleLowerCase("es"),
        sku: `DEMO-${name.toLocaleUpperCase("es")}`,
        name,
        description: "Producto de demostración para la calculadora",
        category,
        basePrice: 200000,
        stock: 0,
    }),
);

export default function ProductSelector({ id, value, onChange }: ProductSelectorProps) {
    return (
        <select
            id={id}
            value={value?.id ?? ""}
            onChange={(event) => {
                const selectedId = event.currentTarget.value;
                const selectedProduct = products.find((product) => product.id === selectedId) ?? null;
                onChange(selectedProduct);
            }}
        >
            <option value="">Ninguno</option>
            {products.map((product) => (
                <option key={product.id} value={product.id}>
                    {product.name}
                </option>
            ))}
        </select>
    );
}
