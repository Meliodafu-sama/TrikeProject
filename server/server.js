var cors = require("cors");

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

//connection
// const mongoose = require('mongoose')
// mongoose.connect('mongodb+srv://meliodas22:meliodas22@fproject-2pnc6.gcp.mongodb.net/TrikeProject', {useNewUrlParser: true})
// .then(() => console.log("connected"))
// .catch((err) => console.log(err))

var index = require("./routes/index");
var bookings = require("./routes/bookings");

var app = express();

var port = 3000;

app.listen(port, function(){
	console.log("Server running on port", port);
});

//Views

app.set("views", path.join(__dirname, "views")); //tells to routes the inner view
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

//Body Parser

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Routes

app.use("/", index);
app.use("/api", bookings);