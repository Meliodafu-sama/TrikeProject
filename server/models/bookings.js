const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({
	username: String,
	Pickup: String,
	Dropoff: String
})

module.exports = mongoose.model('Booking', bookingSchema)