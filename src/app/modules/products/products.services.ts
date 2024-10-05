import { TProducts } from "./product.interface";
import { ProductModel } from "./product.model";

const CreateProductIntoDB = async (payload: TProducts) => {
  const results = await ProductModel.create(payload);
  return results;
};

//Get data from database..
const GetProductFromDB = async () => {
  const results = await ProductModel.find();
  return results;
};

// Fetch products from the database with pagination..
const ProductPagi = async (
  page: number
): Promise<{ products: TProducts[]; totalCount: number }> => {
  const limit = 12;
  const skip = (page - 1) * limit;

  const [products, totalCount] = await Promise.all([
    ProductModel.find().skip(skip).limit(limit).exec(),
    ProductModel.countDocuments(),
  ]);

  return { products, totalCount };
};

//Get Single Product by ID

const GetProductByID = async (_id: string) => {
  const results = await ProductModel.findById(_id);
  return results;
};

//Update Facility...

const UpdateProductIntoDB = async (_id: string, payload: TProducts) => {
  const results = await ProductModel.findByIdAndUpdate({ _id }, payload, {
    new: true,
  });

  return results;
};

//Delete Facility

const deleteProduct = async (_id: string) => {
  const deletedFacility = await ProductModel.findByIdAndDelete(_id);
  return deletedFacility;
};

export const ProductSevice = {
  CreateProductIntoDB,
  GetProductFromDB,
  GetProductByID,
  UpdateProductIntoDB,
  deleteProduct,
  ProductPagi,
};
