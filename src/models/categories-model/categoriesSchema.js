import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "inactive",
    },
    catName: {
      type: String,
      required: true,
      maxlength: 100,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      index: 1,
      trim: true,
      maxlength: 100,
    },
    parentCatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Category", categorySchema);
