var express = require("express");
var app = express();

var likesRouter = require("./likes");

app.use("/likes", likesRouter);

module.exports = app;
