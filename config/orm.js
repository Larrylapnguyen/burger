var connection = require("./connection.js");

function printQuestionMarks(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push("?");
	}
	return arr.toString();
}

function objToSql(ob) {
	var arr = [];
	for (var key in ob) {
		var value = ob[key];
		if (Object.hasOwnProperty.call(ob, key)) {
			if (typeof value === "string" && value.indexOf(" ") >= 0) {
				arr.push(key + "=" + value);
			}
		}
	}
	return arr.toString();
}

var orm = {
	all: function (tableInput, cb) {
		var query = "SELECT * FROM " + tableInput + ";";
		connection.query(query, function (err, results) {
			if (err) {
				throw err;
			}
			cb(results);
		});
	},
	create: function (table, col, val, cb) {
		var query = "INSERT INTO " + table + " (" + col.toString() + ") VALUES (" + printQuestionMarks(val.length) + ") ";
		console.log(query);

		connection.query(query, val, function (err, results) {
			if (err) throw err;
			cb(results);
		});
	},
	updateOne: function (table, obj, con, cb) {
		var query = "UPDATE " + table + " SET " + objToSql(obj) + " WHERE " + con;
		console.log(query);
		connection.query(query, function (err, results) {
			if (err) throw err;
			cb(results);
		});
	}
};

module.exports = orm;