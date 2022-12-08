import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "inactive",
      required: true,
    },
    name: {
      type: String,
      required: true,
      maxlength: 100,
    },
    sku: {
      type: String,
      required: true,
      unique: true,
      maxlength: 20,
      index: 1,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      index: 1,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 1000,
      index: 1,
      trim: true,
    },
    catID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },
    qty: {
      type: Number,
      default: 0,
      required: true,
    },
    images: [{ type: String }],
    thumbnail: {
      type: String,
      // required: true,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
      required: true,
    },
    salesPrice: {
      type: Number,
      default: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    salesStartedDate: {
      type: String,
      default: null,
    },
    salesEndedDate: {
      type: String,
      default: null,
    },
    ratings: {
      type: Number,
      default: 5,
      maximum: 5,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
