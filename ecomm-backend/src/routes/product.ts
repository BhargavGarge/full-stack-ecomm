import express from "express";
import { adminOnly } from "../middleware/auth.js";
import { newProduct } from "../controllers/product.js";
import { singleUpload } from "../middleware/multer.js";

const app = express.Router();

app.post("/new", singleUpload, newProduct as any);
export default app;
