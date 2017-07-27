//import the orm to create functions that will interact with the database

var orm = require("../config/orm.js");

var burger = {
	all: function(cb) {
		orm.all("burgers", function(res) {
			cb(res);
		});
	},
	//the variables cols and vals are arrays
	create: function(col, vals, cb) {
		orm.create("burgers", cols, vals, function(res) {
			cb(res);
		});
	},

};