//place all route.blahblah using express.Router()
//list all dependencies here
var express = require('express');
var router = express.Router();
var Burger = require('../models/burger.js');

router.get("/", function(req, res) {

});

router.get("/burger", function(req, res) {

});

router.post("/burger/create", function(req, res) {

});

router.put("/burger/update/:id", function(req, res) {

});

module.exports = router;
