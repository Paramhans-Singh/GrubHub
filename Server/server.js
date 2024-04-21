const express = require("express");
const db = require("./Database/db");
const cors = require("cors");
const Item = require("./models/itemModel");
const dotenv = require("dotenv");

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const itemsRoute = require("./routes/itemsRoute");
const usersRoute = require("./routes/usersRoute");
const ordersRoute = require("./routes/ordersRoute");

app.use("/api/items/", itemsRoute);
app.use("/api/users/", usersRoute);
app.use("/api/orders/", ordersRoute);

app.get("/", (req, res) => {
  res.send("Server running");
});

app.get("/items", async (req, res) => {
  try {
    const items = await Item.find({});
    res.send(items);
    console.log(items);
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Server started at port ${port}`));
