import useState from "react";

export default function ProductSelector({ value, onChange }) {
    const products = ["Ninguno", "Silla", "Mesa", "Sofá", "Cama", "Estantería"];

    const [productSelector, setProductSelector] = useState([{ productSelected: "None" }]);

    const addProductSelector = (Product) => {
        setProductSelector([...productSelector, { productSelected: Product }]);
    }

    const removeProductSelector = () => {
        if (productSelector.length > 1) {
            setProductSelector(productSelector.slice(0, -1));
        }
    }

    return (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            {products.map((product, index) => (
                <option key={index} value={product}>
                    {product}
                </option>
            ))}
        </select>
    );
}