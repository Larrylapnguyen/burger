var express = require("express");
var exhb = require("express-handlebars");

var PORT = process.env.PORT || 8080;
var app = express();

var methodOverride = require("method-override");
app.use(express.static("public"));

app.use(express.urlencoded({
	extended: false
}));
app.use(methodOverride("_method"));
app.use(express.json());


app.engine("handlebars", exhb({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controller/burgers_controller.js");

app.use(routes);

app.listen(PORT, function () {
	console.log("Listening to Localhost: ", PORT);
});