import categoriesSchema from "./categoriesSchema.js";

// to get all the categories
export const getAllCategories = () => {
  return categoriesSchema.find();
};

// to get a single product by parentCatId
// export const getCategoriesByParentCatId = (parentCatId) => {
//   return categoriesSchema.find({
//     parentCatId: {
//       $in: parentCatId,
//     },
//   });
// };

// to get a single product by parentCatId
export const getCategoriesByParentCatId = (filter) => {
  return categoriesSchema.find(filter);
};
