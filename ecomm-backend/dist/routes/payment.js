import express from "express";
import { adminOnly } from "../middleware/auth.js";
import { allCoupons, applyDiscount, deleteCoupon, getCoupon, newCoupon, updateCoupon, } from "../controllers/payment.js";
const app = express.Router();
app.post;
app.post("/coupon/new", newCoupon);
app.get("/discount", applyDiscount);
app.get("/coupon/all", adminOnly, allCoupons);
app
    .route("/coupon/:id")
    .get(adminOnly, getCoupon)
    .delete(adminOnly, deleteCoupon)
    .put(adminOnly, updateCoupon);
export default app;
