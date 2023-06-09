var express = require('express');
var router = express.Router();

/* GET home page. */
const home = router.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/index.html');
});

module.exports = home;
