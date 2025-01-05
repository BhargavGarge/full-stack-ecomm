import express from "express";
import { adminOnly } from "../middleware/auth.js";
import { deleteProducts, getAdminProducts, getAllCategories, getAllProducts, getlatestProducts, getSingleProducts, newProduct, updateProduct, } from "../controllers/product.js";
import { singleUpload } from "../middleware/multer.js";
const app = express.Router();
app.post("/new", adminOnly, singleUpload, newProduct);
app.get("/all", getAllProducts);
app.get("/latest", getlatestProducts);
app.get("/categories", getAllCategories);
app.get("/admin-products", adminOnly, getAdminProducts);
app
    .route("/:id")
    .get(getSingleProducts)
    .put(adminOnly, singleUpload, updateProduct)
    .delete(adminOnly, deleteProducts);
export default app;
