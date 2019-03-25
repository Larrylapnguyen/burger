var mysql = require("mysql");

var connection;
// Heroku Hosting
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "root",
		database: "burgers_db"
	});
};

connection.connect(function (err) {
	if (err) {
		console.log("ERROR: " + err.stack);
		return;
	} else {
		console.log("Connected as id: " + connection.threadId);
	}
});

module.exports = connection;