import { Request, Response } from "express";
import { ProductSevice } from "./products.services";
import { ProductModel } from "./product.model";

const createProduct = async (req: Request, res: Response) => {
  try {
    const results = await ProductSevice.CreateProductIntoDB(req.body);
    res.status(200).json({
      status: "success",
      message: "Product Created Successfully",
      data: results,
    });
  } catch (error) {
    console.log(error);
  }
};

const GetProduct = async (req: Request, res: Response) => {
  try {
    const results = await ProductSevice.GetProductFromDB();
    res.status(200).json({
      status: "success",
      message: "Product Get Successfully",
      data: results,
    });
  } catch (error) {
    console.log(error);
  }
};

const GetProductByID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const results = await ProductSevice.GetProductByID(id);
    res.status(200).json({
      status: "success",
      message: "Single Product Get Successfully",
      data: results,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const results = await ProductSevice.UpdateProductIntoDB(id, req.body);
    res.status(200).json({
      status: "success",
      message: " Product Updated Successfully",
      data: results,
    });
  } catch (error) {
    console.log(error);
  }
};

//delete Facility..
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const results = await ProductSevice.deleteProduct(id);
    res.status(200).json({
      status: "success",
      message: " Product delete Successfully",
      data: results,
    });
  } catch (error) {
    console.log(error);
  }
};

//Pagination....

const getProductsPagination = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;

  try {
    const { products, totalCount } = await ProductSevice.ProductPagi(page);
    const totalPages = Math.ceil(totalCount / 12);

    res.json({
      page,
      totalPages,
      totalCount,
      products,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

export const ProductController = {
  createProduct,
  GetProduct,
  GetProductByID,
  updateProduct,
  deleteProduct,
  getProductsPagination,
};
