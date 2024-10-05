import { Router } from "express";
import { ProductController } from "./product.controller";

const router = Router();

router.post("/create-product", ProductController.createProduct);
router.get("/", ProductController.GetProduct);
router.get("/show", ProductController.getProductsPagination);
router.get("/:id", ProductController.GetProductByID);
router.put("/:id", ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);

export const ProductRoutes = router;
