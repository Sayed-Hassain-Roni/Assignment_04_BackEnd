import { Request, Response } from "express";
import { ProductSevice } from "./products.services";

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

export const ProductController = {
  createProduct,
  GetProduct,
  GetProductByID,
};
