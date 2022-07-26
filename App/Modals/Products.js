const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product Name is Required"],
    trim: true,
    maxlength: [20, "Max 20 Characters Name Accepted"],
  },
  price: {
    type: Number,
    required: [true, "Product Price is Required"],
    trim: true,
    maxlength: [20, "Max 20 Characters Name Accepted"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is Not Supported",
    },
    // enum: ["ikea", "liddy", "caressa", "marcos"],
  },
});

module.exports = mongoose.model("Products", productsSchema);
