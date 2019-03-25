var orm = require("../config/orm.js");

var burger = {
	all: function (cb) {
		orm.all('burgers', function (res) {
			cb(res);
		});
	},
	create: function (col, val, cb) {
		orm.create('burgers', col, val, function (res) {
			cb(res);
		});
	},
	updateOne: function (obj, con, cb) {
		orm.updateOne('burgers', obj, con, function (res) {
			cb(res);
		});
	}
};

module.exports = burger;