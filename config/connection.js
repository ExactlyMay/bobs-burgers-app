var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
connection = mysql.createConnection({
  host: "localhost",
  port: process.env.PORT || 8889,
  user: "root",
  password: "root",
  database: "s0ua41ek6imoht3y"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//export connection for our ORM to use.
module.exports = connection;