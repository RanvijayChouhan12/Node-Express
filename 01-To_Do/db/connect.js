const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log("CONNECTED TO DB----->>> 🙄😜"))
    .catch((err) => console.log("ERROR in Connecting==>>", err));
};

module.exports = {
  connectDB,
};
