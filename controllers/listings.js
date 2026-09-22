const Listing = require("../models/listing");
const User = require("../models/user.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

// module.exports.index = async (req, res) => {
//     const allListings = await Listing.find({});
//     res.render("listings/index.ejs", {allListings});
// }

module.exports.index = async (req, res) => {
    const {
        category,
        search,
        maxPrice,
        guests,
        propertyType,
        bedrooms
    } = req.query;

    let filter = {};

    // Category filter
    if (category) {
        filter.category = category;
    }

    // Search filter
    if (search) {
        const searchRegex = new RegExp(search, "i");

        filter.$or = [
            { title: searchRegex },
            { description: searchRegex },
            { location: searchRegex },
            { country: searchRegex },
            { category: searchRegex },
            { propertyType: searchRegex }
        ];
    }

    // Maximum price
    if (maxPrice) {
        filter.price = { $lte: Number(maxPrice) };
    }

    // Minimum guests
    if (guests) {
        filter.guests = { $gte: Number(guests) };
    }

    // Property type
    if (propertyType) {
        filter.propertyType = propertyType;
    }

    // Minimum bedrooms
    if (bedrooms) {
        filter.bedrooms = { $gte: Number(bedrooms) };
    }

    const allListings = await Listing.find(filter);

    let wishlistIds = [];

    if (req.user) {
        const user = await User.findById(req.user._id);
        wishlistIds = user.wishlist.map(id => id.toString());
    }


    res.render("listings/index.ejs", { allListings, search, wishlistIds});
};

//--------------------------------------------------//


module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs")
}


module.exports.showListing = async(req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id)
    .populate({
        path: "reviews",
        populate: {
            path: "author",
        },
    })
    .populate("owner");
    if(!listing) {
        req.flash("error", "Listing does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
}

//----------------------------------//

module.exports.createListing = async (req, res, next) => {
    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
    })
    .send();

    console.log(response.body.features[0].geometry);

    let url = req.file.path;
    let filename = req.file.filename;
    
    const listingData = req.body.listing;
    if (listingData.amenities) {
        listingData.amenities = listingData.amenities
        .split(",")
        .map(item => item.trim())
        .filter(item => item !== "");
    }

    const newListing = new Listing(listingData);

    newListing.owner = req.user._id;
    newListing.image = {url, filename};

    newListing.geometry = response.body.features[0].geometry;


    await newListing.save();
    req.flash("success", "New Listing Created");
    res.redirect("/listings");
}

//---------------------------------//


module.exports.renderEditForm = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    
    if(!listing) {
        req.flash("error", "Listing does not exist!");
        return res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_250");
    res.render("listings/edit", {listing, originalImageUrl});
}


//----------------------------------//

module.exports.updateListing = async(req, res) => {
    let { id } = req.params;
    let listingData = req.body.listing;
    
    if (listingData.amenities) {
        listingData.amenities = listingData.amenities
        .split(",")
        .map(item => item.trim())
        .filter(item => item !== "");
    }

    let listing = await Listing.findByIdAndUpdate(
        id,
        listingData,
        { new: true }
    );
    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url, filename};
        await listing.save();
    }

    req.flash("success", "Listing Updated");
    res.redirect(`/listings/${id}`);
}

//-----------------------------------//


module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted");
    res.redirect("/listings");
}