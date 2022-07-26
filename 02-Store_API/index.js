const express = require("express");
require("express-async-errors");
const productRouter = require("./Router/Router");
const app = express();
const { connectDB } = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
require("dotenv").config();

// Middleware
// app.use(express.static("./public"));
app.use(express.json());

// Routes
// app.get("/", (request, respose) => {
//   respose.send("Hello There");
// });

app.get("/", (req, res) => {
  res.send(`<h1>SOTRE API</h1> <a href="/api/v1/products">Products Routes</a>`);
});

app.use("/api/v1/products", productRouter);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.STORE_API);
    app.listen(port, console.log("server is Listining on Port", port));
  } catch (error) {
    console.log(error);
  }
};

start();
