const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose
    .connect(url)
    .then(() => console.log("CONNECTED TO DB----->>> 🙄😜"))
    .catch((err) => console.log("ERROR in Connecting==>>", err));
};

module.exports = {
  connectDB,
};
