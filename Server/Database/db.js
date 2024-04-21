const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.dbURL;
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("connected", () => {
  console.log("Connection to MongoDB successful.");
});
db.on("error", () => {
  console.log("Connection to MongoDB failed.");
});

module.exports = mongoose;
