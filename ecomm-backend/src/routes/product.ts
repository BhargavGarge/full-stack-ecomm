import express from "express";
import { adminOnly } from "../middleware/auth.js";
import {
  deleteProducts,
  getAdminProducts,
  getAllCategories,
  getAllProducts,
  getlatestProducts,
  getSingleProducts,
  newProduct,
  updateProduct,
} from "../controllers/product.js";
import { singleUpload } from "../middleware/multer.js";

const app = express.Router();

app.post("/new", adminOnly as any, singleUpload, newProduct as any);
app.get("/all", getAllProducts as any);

app.get("/latest", getlatestProducts as any);
app.get("/categories", getAllCategories as any);
app.get("/admin-products", adminOnly as any, getAdminProducts as any);
app
  .route("/:id")
  .get(getSingleProducts as any)
  .put(adminOnly as any, singleUpload, updateProduct as any)
  .delete(adminOnly as any, deleteProducts as any);

export default app;
