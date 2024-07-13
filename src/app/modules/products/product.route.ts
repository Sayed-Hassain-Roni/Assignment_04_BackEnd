import { Router } from "express";
import { ProductController } from "./product.controller";

const router = Router();

router.post("/create-product", ProductController.createProduct);
router.get("/", ProductController.GetProduct);
router.get("/:id", ProductController.GetProductByID);

export const ProductRoutes = router;
