const { connectDB } = require("./db/connect");
const Products = require("./Modals/Products");
const ProductsJson = require("./products.json");

require("dotenv").config();

const start = async () => {
  try {
    await connectDB(process.env.STORE_API);
    await Products.deleteMany();
    await Products.create(ProductsJson);
    console.log("Success...!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
