import express from "express";
import {
  getAllProducts,
  getProductByCategory,
} from "../models/product-model/productModel.js";

const router = express.Router();

// to get all products
router.get("/", async (req, res) => {
  const allProducts = await getAllProducts();
  res.send(allProducts);
});

// to get all products product by catID
router.get("/?", async (req, res) => {
  const productsById = await getProductByCategory(req.body);
  res.send(productsById);
});

export default router;
