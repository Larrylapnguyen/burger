var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
	burger.all(function (burger_data) {
		var hbObj = {
			burgers: burger_data
		};
		// console.log(hbObj);
		res.render("index", hbObj);
	});
});

router.post("/burgers", function (req, res) {
	console.log("TEST POST");
	burger.create([
			'burger_name'
		],
		[
			req.body.burger_name
		],
		function () {
			res.redirect("/");
		});
});
router.put("/burgers/:id", function (req, res) {
	console.log("TEST****************************************************************************************");
	var con = 'id = ' + req.params.id;
	burger.updateOne({
		devoured: true
	}, con, function () {
		res.redirect("/");
	});
});

module.exports = router;