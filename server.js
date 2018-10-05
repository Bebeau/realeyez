const express = require('express');

require('dotenv').config();
var mckey = process.env.REACT_APP_MAILCHIMP_KEY;
var stripesk = process.env.REACT_APP_SECRET_KEY;

var stripe = require("stripe")(stripesk);
var parseFullName = require('parse-full-name').parseFullName;

var Mailchimp = require('mailchimp-api-v3');
var mailchimp = new Mailchimp(mckey);

const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Serve any static files
app.use(express.static(path.join(__dirname, 'public')));
// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// create a charge
app.post('/charge', (req, res) => {
	var token = req.body;
	var first = parseFullName(token.card.name, 'first');
	var last = parseFullName(token.card.name, 'last');
	stripe.customers.create({
		email: token.email,
		description: token.card.name,
		shipping: {
			name: token.shipping_name,
			address: {
				line1: token.shipping_address_line1,
				city: token.shipping_address_city,
				state: token.shipping_address_state,
				postal_code: token.shipping_address_zip,
				country: 'US'
			},
		}
	})
	.then(customer =>
		stripe.charges.create({
			amount: token.donation,
			currency: 'usd',
			source: token.id
		})
	)
	.then(
		function() {
		    var listUniqueId = '550282ed98';
		    mailchimp.post('/lists/'+ listUniqueId +'/members', {
				email_address : token.email,
				status : 'subscribed',
				'merge_fields': {
					'FNAME': first,
					'LNAME': last
				}
			});
	    }
	)
	.catch(err => {
		console.log("Error:", err);
		res.status(500).send({error: "Purchase Failed"});
	});
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));