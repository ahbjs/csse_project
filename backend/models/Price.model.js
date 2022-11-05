const mongoose = require("mongoose");

const PriceSchema = mongoose.Schema({
  tackon: { type: String },
  takeoff: { type: String },
  distance: { type: String },
  price: { type: String },
  routeNo: { type: String }
});

const Price = mongoose.model("priceForDistance", PriceSchema);

module.exports = Price;
