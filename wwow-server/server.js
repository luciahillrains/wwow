const express = require('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const Account = redquire('../models/account');

const saltRounds = 10;
const app = express();
mongoose.connect("mongodb://localhost/wwow");
var db = mongoose.connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res, next) {
	res.send("yay it works");
});

app.post('/account', function(req, res, next){
	if(req.body.email && req.body.password && req.body.passwordConfirm) {
		if(req.body.password !== req.body.passwordConfirm) {
			var err = {};
			err.status = "X1";
			err.message = "Password and password confirm do not match.";
			next(err);
		}
		var salt = "";
		var hash = "";
		bcrypt.genSalt(saltRounds, function(err, salty){
			salt = salty;
			bcrypt.hash(req.body.password, salty, function(err, hashbrowns){
				hash = hashbrowns;
			});
		});
		var accountData = {
			email: req.body.email,
			salt: salt,
			hash: hash
		};

		Account.create(accountData, function(error, acct){
			if(error) {
				return next(error);
			} else {
				res.send("ok");
			}
		});

	}
});

app.use(function(req, res, next){
	var err = new Error('File Not Found');
	err.status = 404;
	next(err);
});

app.use(function(err, req, res, next){
	res.status(err.status || 500);
	res.send(err.message);
});

app.listen(3000, function(){
	console.log('listening on 3000');
});

