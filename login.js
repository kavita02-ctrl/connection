const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();

const app = express();
app.use("/assets",express.static("assets"));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Kavita@782435",
    database: "testing"
});

// Connect to the database
connection.connect(function (err) {
    if (err) throw err; 
    console.log("Connected to the Database");
});

app.get("/",encoder, function(req, res) {
    var username = req.body.username;
    var username = req.body.username;
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    connection.query("SELECT * FROM loginuser WHERE user_name = ? AND user_pass = ?", [username,password], function(error, results, fields) {
        if (error) {
            console.error("Error executing MySQL query:", error);
            return res.status(500).send("Error executing MySQL query");
        }
        
        if (results.length > 0) {
            res.redirect("/welcome");
        } else {
            res.redirect("/");
        }
        res.end();
    });
});
//when login is success
app.get("/welcome",function(req,res){
    res.sendFile(__dirname+ "welcome.html")
})

//set app port
app.listen(4000);