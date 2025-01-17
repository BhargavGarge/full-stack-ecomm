import express from "express";
import userRoute from "./routes/user.js";
import productRoute from "./routes/product.js";
import orderRoute from "./routes/order.js";
import paymentRoute from "./routes/payment.js";
import dashboardRoute from "./routes/stats.js";
import connectDB from "./utils/features.js";
import dotenv from "dotenv";
import { errorMiddleware } from "./middleware/error.js";
import NodeCache from "node-cache";
import Stripe from "stripe";
dotenv.config();
connectDB();
const stripeKey = process.env.STRIPE_SECRET_KEY || "";
export const myCache = new NodeCache();
export const strip = new Stripe(stripeKey);
const app = express();
app.use(express.json());

const port = 3000;
app.get("/", (req, res) => {
  res.send("Welcome to Ecomerce API");
});
//Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/dashboard", dashboardRoute);

app.use("/uploads", express.static("uploads"));

app.use(errorMiddleware as any);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
