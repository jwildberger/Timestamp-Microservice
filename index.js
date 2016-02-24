var express = require('express');
var app = express();
var path = require('path');
var dateParser = require('./dateParser.js');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'front_page.html'));
});

app.get(/[0-9]+/, function (req, res) {
  var url = req.url;
  var dates = dateParser.parse(url);
  res.send(dates);
});

app.use(function(req, res, next) {
  res.status(404).send('Your input must include numbers.');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});