const express = require("express");
const router = express.Router();

const User = require("../models/user.js");
const Listing = require("../models/listing.js");
const { isLoggedIn } = require("../middleware.js");


// Show wishlist
router.get("/", isLoggedIn, async (req, res) => {
    const user = await User.findById(req.user._id)
        .populate("wishlist");

    res.render("listings/wishlist.ejs", {
        wishlist: user.wishlist
    });
});

// Add listing to wishlist
router.post("/:listingId", isLoggedIn, async (req, res) => {

    const { listingId } = req.params;

    const listing = await Listing.findById(listingId);

    if (!listing) {
        return res.status(404).json({
            success: false,
            message: "Listing does not exist"
        });
    }

    const user = await User.findById(req.user._id);

    const alreadyExists = user.wishlist.some(
        id => id.toString() === listingId
    );

    if (alreadyExists) {

        user.wishlist.pull(listingId);
        await user.save();

        return res.json({
            success: true,
            added: false
        });

    } else {

        user.wishlist.push(listingId);
        await user.save();

        return res.json({
            success: true,
            added: true
        });
    }
});


// Remove listing from wishlist
router.delete("/:listingId", isLoggedIn, async (req, res) => {

    const { listingId } = req.params;

    await User.findByIdAndUpdate(
        req.user._id,
        {
            $pull: {
                wishlist: listingId
            }
        }
    );

    req.flash("success", "Removed from wishlist");

    res.redirect(`/listings/${listingId}`);
});


module.exports = router;