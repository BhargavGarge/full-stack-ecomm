import { NextFunction, Response, Request } from "express";
import { TryCatch } from "../middleware/error.js";
import { NewProductRequestBody } from "../types/types.js";
import { Product } from "../models/product.js";

export const newProduct = TryCatch(
  async (
    req: Request<{}, {}, NewProductRequestBody>,
    res: Response,
    next: NextFunction
  ) => {
    const { name, price, stock, category, description } = req.body;
    const photo = req.file;

    await Product.create({
      name,
      price,
      description,
      stock,
      category: category.toLowerCase(),
      photo: photo?.path,
    });

    return res.status(201).json({
      success: true,
      message: "Product Created Successfully",
    });
  }
);
