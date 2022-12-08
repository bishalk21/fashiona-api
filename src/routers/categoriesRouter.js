import express from "express";
import {
  getAllCategories,
  getCategoriesByParentCatId,
} from "../models/categories-model/categoriesModel.js";

const router = express.Router();

//get all categories
router.get("/", async (req, res) => {
  const allCategories = await getAllCategories();
  res.send(allCategories);
});

//get categories by parentCatId
router.get("/:parentCatId", async (req, res) => {
  const { parentCatId } = req.params;
  const categoriesByParentCatId = await getCategoriesByParentCatId({
    parentCatId,
  });

  let subCategoriesArr = [];
  categoriesByParentCatId.forEach((category) => {
    subCategoriesArr.push(category._id);
  });
  res.send(subCategoriesArr);
});

export default router;
