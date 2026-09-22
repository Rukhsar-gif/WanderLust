const express = require("express");
const router = express.Router();

const { isLoggedIn } = require("../middleware.js");
const bookingController = require("../controllers/bookings.js");

// My Trips
router.get("/", isLoggedIn, bookingController.index);

// Booking form
router.get("/new/:listingId", isLoggedIn, bookingController.renderNewForm);

// Create booking
router.post("/:listingId", isLoggedIn, bookingController.createBooking);

// Cancel booking
router.delete("/:bookingId", isLoggedIn, bookingController.cancelBooking);

module.exports = router;