import express from "express";
import { adminOnly } from "../middleware/auth.js";
import {
  allCoupons,
  applyDiscount,
  deleteCoupon,
  getCoupon,
  newCoupon,
  updateCoupon,
} from "../controllers/payment.js";

const app = express.Router();

app.post("/coupon/new", newCoupon as any);
app.get("/discount", applyDiscount as any);
app.get("/coupon/all", adminOnly as any, allCoupons as any);
app
  .route("/coupon/:id")
  .get(adminOnly as any, getCoupon as any)
  .delete(adminOnly as any, deleteCoupon as any)
  .put(adminOnly as any, updateCoupon as any);

export default app;
