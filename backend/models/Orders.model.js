const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Order = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, required: true },
});

module.exports = mongoose.model("Order", Order);
