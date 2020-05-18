var express = require("express");
var request = require("request");

app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))