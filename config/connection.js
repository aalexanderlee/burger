//require the mysql package
var mysql = require("mysql");
var connection = mysql.createConnection({
	port: 3000,
	host: "localhost",
	user: "austin",
	password: "ucleagu8",
	database: "burger_db"
});
//establish the connection to sql workbench with credentials
if(process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		//port: 3000,
		host: "localhost",
		user: "austin",
		password: "ucleagu8",
		database: "burgers_db",
	});
};
//check connection for errors
connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log('connected as id' + connection.threadId);
});

//export the connection for neighboring files to require
module.exports = connection;
