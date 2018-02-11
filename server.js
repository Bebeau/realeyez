const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

var stripe = require("stripe")("sk_test_a2XQZufg8dtZ7ADWOr0zCtpH");

app.use(express.static(path.join(__dirname, 'pages')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/charge', function (req, res) {
	console.log(req.body);
});

app.listen(process.env.PORT || 8080);