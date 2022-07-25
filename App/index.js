console.log("hey there .. this is the Starter File.");
const express = require("express");
const router = require("./Router/Router");
const app = express();
const { connectDB } = require("./db/connect");
require("dotenv").config();

// Middleware
app.use(express.static("./public"));
app.use(express.json());

// Routes
// app.get("/", (request, respose) => {
//   respose.send("Hello There");
// });

app.use("/api/v1/tasks", router);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(port, console.log("server is Listining on Port", port));
  } catch (error) {
    console.log(error);
  }
};

start();
