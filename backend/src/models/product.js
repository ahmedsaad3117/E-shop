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
    image: {
      type: String,
    },
    overallRating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    }, 
    listOfReviews: [
      {
        reviewerName: {
          type: String,
          required: true,
        },
        writtenReview: {
          type: String,
        },
        rating: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

productSchema.pre("save", async function (next) {
  const product = this;

  if (product.isModified("listOfReviews")) {
    let rates = product.listOfReviews.reduce((accumulator, curValue) => {
      return accumulator + curValue.rating;
    }, 0);

    product.overallRating = rates / product.listOfReviews.length;
  }
  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
