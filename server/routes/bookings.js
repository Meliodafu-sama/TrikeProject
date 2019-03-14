var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");

//var db = mongojs("mongodb+srv://meliodas22:meliodas22@fproject-2pnc6.gcp.mongodb.net/TrikeProject", ["bookings"]);

const Booking = require('../models/bookings')

router.get("/bookings", function(req, res, next){
	Booking.find()
	.then(result => {
		console.log(result)
		res.status(200).json({ code: 200, result: result })
	})
	.catch(err => {
		console.log(err)
		res.status(400).json({code: 400, message: err})
	})

	/*db.bookings.find(function(err, bookings){
		if(err){
			res.send(err);
		}
		res.json(bookings);
	});*/

});

module.exports = router;