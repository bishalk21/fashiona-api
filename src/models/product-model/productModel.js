import productSchema from "./productSchema.js";

// to get all the products
export const getAllProducts = (filter) => {
  return productSchema.find(filter);
};

// to get a single product by id
export const getProductById = (_id) => {
  return productSchema.findById(_id);
};

// to get a single product by categories
export const getProductByCategory = (catID) => {
  return productSchema.find({
    catID: {
      $in: arg,
    },
  });
};
