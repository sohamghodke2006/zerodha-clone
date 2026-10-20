// New Setup for DNS resolution to avoid potential DNS issues
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);


require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/", authRoute);



app.listen(PORT, () => {
    console.log(`App Started on port ${PORT}`);
    mongoose.connect(uri);
    console.log("DB Started!")
});

app.get('/allHoldings', async(req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get('/allPositions', async(req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post('/newOrder', async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.send("Order saved!");
});