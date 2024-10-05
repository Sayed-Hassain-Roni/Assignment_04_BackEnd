import { Router } from "express";
import { createOrderController } from "./Order.controller";

const router = Router();

// Route to create an order
router.post("/create", createOrderController);

export const orderRoutes = router;
