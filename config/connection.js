var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
connection = mysql.createConnection({
  host: "ffn96u87j5ogvehy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
  port: process.env.PORT || 8889,
  user: "b0p22du7thy8w0ql",
  password: "pll3w8rst3e0g9y2",
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