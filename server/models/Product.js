const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category", // reference to Categories collection
      required: true,
    },
  },
  { timestamps: true } // adds createdAt & updatedAt
);

module.exports = mongoose.model("Product", productSchema);
