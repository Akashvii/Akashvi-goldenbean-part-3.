import express from "express";
import orderCtrl from "../controllers/orderController.js";

const router = express.Router();

router.route("/api/orders")
  .post(orderCtrl.create)
  .get(orderCtrl.list);

router.route("/api/orders/:orderId")
  .delete(orderCtrl.remove)
  .put(orderCtrl.update);

export default router;