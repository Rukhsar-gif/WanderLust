const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/reviews.js")


//Reviews

//Post Route - Create
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));


//Delete Route (for reviews)
router.delete("/:reviewId", isLoggedIn, isReviewAuthor,  wrapAsync(reviewController.deleteReview));



// //Reviews
// //Post Route
// router.post("/", async(req, res) => {
//     let listing = await Listing.findById(req.params.id);
//     let newReview = new Review(req.body.review);

//     listing.reviews.push(newReview);

//     await newReview.save();
//     await listing.save();

//     console.log("new review saved");
//     res.send("new review saved");
// });

module.exports = router;