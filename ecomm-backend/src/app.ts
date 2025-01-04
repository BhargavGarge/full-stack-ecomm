import express from "express";
import userRoute from "./routes/user.js";
import productRoute from "./routes/product.js";
import connectDB from "./utils/features.js";
import dotenv from "dotenv";
import { errorMiddleware } from "./middleware/error.js";
dotenv.config();
const app = express();
app.use(express.json());

const port = 3000;
connectDB();
app.get("/", (req, res) => {
  res.send("Welcome to Ecomerce API");
});
//Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);

app.use(errorMiddleware as any);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
