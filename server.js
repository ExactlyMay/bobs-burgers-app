var express = require('express');
var bodyParser = require('body-parser');
//var methodOverride = require('method-override');
var path = require('path')
var app = express();

var PORT = process.env.PORT || 8080;

// app.use(express.static(process.cwd() + '/public'));
// app.use(bodyParser.urlencoded({
// 	extended: false
// }));
// //app.use(methodOverride('_method'))
// var exphbs = require('express-handlebars');
// app.engine('handlebars', exphbs({
//     defaultLayout: 'main'
// }));
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'handlebars');
// var routes = require('./controllers/burgers_controller.js');
// app.listen(PORT);



app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use('/', routes);

//app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});