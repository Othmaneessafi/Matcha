const mysql = require("mysql");

const con = mysql.createConnection({
    host: "192.168.99.100",
    port: "3306",
    user: "tibicha",
    password: "tibicha",
    database: "matcha",
});

module.exports = con;
