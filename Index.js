
const express = require("express");
const app = express();
require("dotenv").config();
const mongoconnect = require("./db");
var bodyParser = require("body-parser");
var routs  = require("./routs/index")
var cors = require("cors");
mongoconnect();

app.set('view engine', 'ejs');
app.use(express.static("files"));
app.use('*',cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/api", require(routs));
let PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("server Running sstpl");
});

app.listen(PORT, () => {
  console.log(`running ${PORT}`);
});