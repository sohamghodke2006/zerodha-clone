// New Setup for DNS resolution to avoid potential DNS issues
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);


require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.listen(PORT, () => {
    console.log(`App Started on port ${PORT}`);
    mongoose.connect(uri);
    console.log("DB Started!")
});