import express from "express";
import userRoute from "./routes/user.js";
import productRoute from "./routes/product.js";
import orderRoute from "./routes/order.js";
import connectDB from "./utils/features.js";
import dotenv from "dotenv";
import { errorMiddleware } from "./middleware/error.js";
import NodeCache from "node-cache";
dotenv.config();
const app = express();
app.use(express.json());

const port = 3000;
connectDB();
export const myCache = new NodeCache();
app.get("/", (req, res) => {
  res.send("Welcome to Ecomerce API");
});
//Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);

app.use("/uploads", express.static("uploads"));

app.use(errorMiddleware as any);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
