const express = require("express");
const {
  getAllProducts,
  getAllProductsStatic,
} = require("../Controllers/Controller");

const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/static").get(getAllProductsStatic);

module.exports = router;
