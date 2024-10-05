import { Schema, model } from "mongoose";
import { TProducts } from "./product.interface";

// Define Mongoose schema for Product
const productSchema: Schema<TProducts> = new Schema(
  {
    name: { type: String },
    description: { type: String },
    rating: { type: Number },
    price: { type: Number },
    stockQuantity: { type: Number },
    category: {
      type: String,
    },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

export const ProductModel = model<TProducts>("Product", productSchema);
