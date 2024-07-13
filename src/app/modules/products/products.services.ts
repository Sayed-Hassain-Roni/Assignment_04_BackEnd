import { TProducts } from "./product.interface";
import { ProductModel } from "./product.model";

const CreateProductIntoDB = async (payload: TProducts) => {
  const results = await ProductModel.create(payload);
  return results;
};

const GetProductFromDB = async () => {
  const results = await ProductModel.find();
  return results;
};
const GetProductByID = async (_id: string) => {
  const results = await ProductModel.findById(_id);
  return results;
};

export const ProductSevice = {
  CreateProductIntoDB,
  GetProductFromDB,
  GetProductByID,
};
