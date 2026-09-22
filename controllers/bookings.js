const Booking = require("../models/booking.js");
const Listing = require("../models/listing.js");

// Show user's bookings
module.exports.index = async (req, res) => {
    const bookings = await Booking.find({
        user: req.user._id
    })
        .populate("listing")
        .sort({ checkIn: 1 });

    const validBookings = bookings.filter(booking => booking.listing);
    
    res.render("bookings/index", { bookings: validBookings });
};

// Show booking form
module.exports.renderNewForm = async (req, res) => {
    const { listingId } = req.params;
    const listing = await Listing.findById(listingId);

    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }

    const bookings = await Booking.find({
        listing: listingId,
        checkOut: { $gte: new Date() }
    }).select("checkIn checkOut");

    res.render("bookings/new.ejs", {
        listing,
        bookings
    });
};

// Create booking
module.exports.createBooking = async (req, res) => {
    const { listingId } = req.params;
    const { checkIn, checkOut, guests } = req.body;

    const listing = await Listing.findById(listingId);

    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }

    if (!checkIn || !checkOut || !guests) {
        req.flash("error", "Please fill all booking details");
        return res.redirect(`/bookings/new/${listingId}`);
    }

    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);

    // Check valid dates
    if (
        isNaN(startDate.getTime()) ||
        isNaN(endDate.getTime())
    ) {
        req.flash("error", "Please enter valid dates");
        return res.redirect(`/bookings/new/${listingId}`);
    }

    // Check-in cannot be in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (startDate < today) {
        req.flash("error", "Check-in date cannot be in the past");
        return res.redirect(`/bookings/new/${listingId}`);
    }

    // Check-out must be after check-in
    if (endDate <= startDate) {
        req.flash(
            "error",
            "Check-out date must be after check-in date"
        );
        return res.redirect(`/bookings/new/${listingId}`);
    }

    // Check guest limit
    const guestCount = Number(guests);

    if (
        !Number.isInteger(guestCount) ||
        guestCount < 1 ||
        guestCount > listing.guests
    ) {
        req.flash(
            "error",
            `This listing allows a maximum of ${listing.guests} guests`
        );
        return res.redirect(`/bookings/new/${listingId}`);
    }

    // Check for overlapping bookings
    const existingBooking = await Booking.findOne({
        listing: listingId,
        checkIn: { $lt: endDate },
        checkOut: { $gt: startDate }
    });

    if (existingBooking) {
        req.flash(
            "error",
            "This listing is already booked for the selected dates"
        );
        return res.redirect(`/bookings/new/${listingId}`);
    }

    // Calculate number of nights
    const timeDifference = endDate - startDate;

    const nights = Math.ceil(
        timeDifference / (1000 * 60 * 60 * 24)
    );

    const totalPrice = nights * listing.price;

    // Create booking
    const booking = new Booking({
        listing: listingId,
        user: req.user._id,
        checkIn: startDate,
        checkOut: endDate,
        guests: guestCount,
        totalPrice: totalPrice
    });

    await booking.save();

    req.flash(
        "success",
        `Booking confirmed! Total: ₹${totalPrice.toLocaleString("en-IN")}`
    );

    res.redirect(`/listings/${listingId}`);
};

// Cancel booking
module.exports.cancelBooking = async (req, res) => {
    const { bookingId } = req.params;

    const booking = await Booking.findById(bookingId);

    if (!booking) {
        req.flash("error", "Booking not found");
        return res.redirect("/bookings");
    }

    if (!booking.user.equals(req.user._id)) {
        req.flash(
            "error",
            "You are not authorized to cancel this booking"
        );
        return res.redirect("/bookings");
    }

    await Booking.findByIdAndDelete(bookingId);

    req.flash(
        "success",
        "Booking cancelled successfully"
    );

    res.redirect("/bookings");
};