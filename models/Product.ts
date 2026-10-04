import Wood from "./Wood";

export type ProductCategory =
  | "seatings"
  | "tables"
  | "storage"
  | "bedroom"
  | "office"
  | "outdoor"
  | "display"
  | "accents";

export type ProductDimensions = {
  readonly widthCm: number;
  readonly depthCm: number;
  readonly heightCm: number;
};

export type ProductData = {
  id: string;
  sku: string;
  name: string;
  description: string;
  category: ProductCategory;
  basePrice: number;
  stock: number;
  dimensions?: ProductDimensions | null;
  wood?: Wood | null;
  fabricId?: string | null;
  painted?: boolean;
  upholstered?: boolean;
  active?: boolean;
};

export default class Product {
  readonly id: string;
  readonly sku: string;
  readonly name: string;
  readonly description: string;
  readonly category: ProductCategory;
  readonly basePrice: number;
  readonly stock: number;
  readonly dimensions: ProductDimensions | null;
  readonly wood: Wood | null;
  readonly fabricId: string | null;
  readonly painted: boolean;
  readonly upholstered: boolean;
  readonly active: boolean;

  constructor({
    id,
    sku,
    name,
    description,
    category,
    basePrice,
    stock,
    dimensions = null,
    wood = null,
    fabricId = null,
    painted = false,
    upholstered = false,
    active = true,
  }: ProductData) {
    if (!id.trim()) throw new Error("Product id is required");
    if (!sku.trim()) throw new Error("Product SKU is required");
    if (!name.trim()) throw new Error("Product name is required");
    if (!Number.isFinite(basePrice) || basePrice < 0) {
      throw new RangeError("Product base price must be a non-negative number");
    }
    if (!Number.isInteger(stock) || stock < 0) {
      throw new RangeError("Product stock must be a non-negative integer");
    }
    if (dimensions && Object.values(dimensions).some((value) => !Number.isFinite(value) || value <= 0)) {
      throw new RangeError("Product dimensions must be positive numbers in centimeters");
    }

    this.id = id;
    this.sku = sku;
    this.name = name;
    this.description = description;
    this.category = category;
    this.basePrice = basePrice;
    this.stock = stock;
    this.dimensions = dimensions ? Object.freeze({ ...dimensions }) : null;
    this.wood = wood;
    this.fabricId = fabricId;
    this.painted = painted;
    this.upholstered = upholstered;
    this.active = active;
  }

  get price(): number {
    return Math.round(this.basePrice * (1 + (this.wood?.pricePercentage ?? 0) / 100));
  }
}
