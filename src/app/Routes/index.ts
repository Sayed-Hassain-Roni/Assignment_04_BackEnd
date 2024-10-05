import { Router } from "express";
import { ProductRoutes } from "../modules/products/product.route";
import { orderRoutes } from "../modules/Order/Order.routes";
import { paymentRoutes } from "../modules/payment/payment.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/product",
    route: ProductRoutes,
  },
  {
    path: "/order",
    route: orderRoutes,
  },
  {
    path: "/payment",
    route: paymentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
