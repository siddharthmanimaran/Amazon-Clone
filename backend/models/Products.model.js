const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Products = new Schema({
  name: { type: String },
  category: { type: String },
  image: { type: String },
  price: { type: String },
  countInStock: { type: Number },
  brand: { type: String },
  rating: { type: String },

  numReviews: { type: String },
  description: { type: String },
});

module.exports = mongoose.model("Products", Products);
