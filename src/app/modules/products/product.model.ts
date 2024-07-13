import { Schema, model } from "mongoose";
import { TProducts } from "./product.interface";

// Define Mongoose schema for Product
const productSchema: Schema<TProducts> = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, enum: [1 | 2 | 3 | 4 | 5], required: true },
    price: { type: Number, required: true },
    stockQuantity: { type: Number, required: true },
    category: {
      type: String,
      enum: [
        "Flowers",
        "Trees",
        "Shrubs and Bushes",
        "Vegetables",
        "Herbs",
        "Seeds and Bulbs",
        "Gardening Tools",
        "Soils and Fertilizers",
        "Garden Decor",
        "Pest and Disease Control",
      ],
      required: true,
    },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

export const ProductModel = model<TProducts>("Product", productSchema);
