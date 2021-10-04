const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Products = new Schema({
  name: { type: String },
  category: { type: String },
  image: { type: String },
  price: { type: Number },
  countInStock: { type: Number },
  brand: { type: String },
  rating: { type: mongoose.Schema.Types.Decimal128 },
  // { type: Number },
  numReviews: { type: Number },
  description: { type: String },
});

module.exports = mongoose.model("Products", Products);
