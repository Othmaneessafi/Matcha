const mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    // port: "3306",
    user: "root",
    password: "",
    database: "matcha",
});
// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");

// });

// app.get('/',(req,res)=>{
//     con.query('CREATE DATABASE IF NOT EXISTS db_matcha',(err,result)=>{
//         if (err)
//             console.log(err)
//     })
//     res.send("running !")
// })
module.exports = con;
