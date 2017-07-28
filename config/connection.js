//require the mysql package
var mysql = require("mysql");

//establish the connection to sql workbench with credentials
var connection = mysql.createConnection({
	port: 8080,
	host: "localhost",
	user: "austin",
	password: "ucleagu8",
	database: "burgers_db"
})

//check connection for errors
connection.connect(function(err) {
	if (err) throw err;
	console.log('conencted as id' + connection.threadId);
});

//export the connection for neighboring files to require
module.exports = connection;
