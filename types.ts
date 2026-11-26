
export enum ProductCategory {
  All = "All",
  TShirt = "T-shirt",
  Sweater = "Sweater",
  PantsShorts = "Pants & Shorts", // "Pants & Shorts" as per image
  Caps = "Caps",
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  price: number;
  imageUrl: string;
}
