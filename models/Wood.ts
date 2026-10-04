export type ResistanceRating = 1 | 2 | 3 | 4 | 5;

export type WoodResistance = {
  readonly water: ResistanceRating;
  readonly humidity: ResistanceRating;
  readonly heat: ResistanceRating;
  readonly uv: ResistanceRating;
};

export type WoodData = {
  id: string;
  name: string;
  description: string;
  pricePercentage: number;
  resistance: WoodResistance;
};

export default class Wood {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly pricePercentage: number;
  readonly resistance: WoodResistance;

  constructor({ id, name, description, pricePercentage, resistance }: WoodData) {
    if (!id.trim()) throw new Error("Wood id is required");
    if (!name.trim()) throw new Error("Wood name is required");
    if (!Number.isFinite(pricePercentage) || pricePercentage < 0 || pricePercentage > 100) {
      throw new RangeError("Wood price percentage must be between 0 and 100");
    }
    for (const [property, rating] of Object.entries(resistance)) {
      if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
        throw new RangeError(`Wood resistance ${property} must be an integer from 1 to 5`);
      }
    }

    this.id = id;
    this.name = name;
    this.description = description;
    this.pricePercentage = pricePercentage;
    this.resistance = Object.freeze({ ...resistance });
  }
}
