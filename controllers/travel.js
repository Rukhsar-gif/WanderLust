const Listing = require("../models/listing.js");


function extractBudget(query) {
    const match = query.match(
        /(?:under|below|less than|maximum|max|budget|upto|up to)\s*₹?\s*(\d+(?:,\d+)*(?:\.\d+)?)/i
    );

    if (!match) return null;

    return Number(match[1].replace(/,/g, ""));
}


function extractGuests(query) {
    const match = query.match(
        /(\d+)\s*(?:people|persons|person|guests|guest|travellers|travelers)/i
    );

    return match ? Number(match[1]) : null;
}


function extractBedrooms(query) {
    const match = query.match(
        /(\d+)\s*(?:bedrooms?|beds?|bhk)/i
    );

    return match ? Number(match[1]) : null;
}


function extractPropertyType(query) {

    const propertyTypes = {
        villa: "Villa",
        apartment: "Apartment",
        house: "House",
        cabin: "Cabin",
        hotel: "Hotel",
        farm: "Farm",
        cottage: "Cottage"
    };

    const text = query.toLowerCase();

    for (const type in propertyTypes) {

        if (text.includes(type)) {
            return propertyTypes[type];
        }
    }

    return null;
}


function extractCategory(query) {

    const text = query.toLowerCase();

    if (
        text.includes("mountain") ||
        text.includes("hills") ||
        text.includes("hill")
    ) {
        return "Mountains";
    }

    if (
        text.includes("pool") ||
        text.includes("swimming")
    ) {
        return "Amazing Pools";
    }

    if (
        text.includes("castle") ||
        text.includes("palace") ||
        text.includes("heritage")
    ) {
        return "Castles";
    }

    if (
        text.includes("camp") ||
        text.includes("camping")
    ) {
        return "Camping";
    }

    if (
        text.includes("farm") ||
        text.includes("farmland") ||
        text.includes("countryside")
    ) {
        return "Farms";
    }

    if (
        text.includes("arctic") ||
        text.includes("snow") ||
        text.includes("northern lights") ||
        text.includes("lapland")
    ) {
        return "Arctic";
    }

    if (
        text.includes("city") ||
        text.includes("urban")
    ) {
        return "Iconic Cities";
    }

    if (
        text.includes("room") ||
        text.includes("rooms")
    ) {
        return "Rooms";
    }

    return null;
}


function extractDestination(query) {

    const destinations = [
        "Goa",
        "Manali",
        "Jaipur",
        "Udaipur",
        "Rishikesh",
        "Nainital",
        "Mumbai",
        "Indore",
        "Alappuzha",
        "Darjeeling",

        "Paris",
        "Nice",
        "Chamonix",
        "Provence",

        "Rome",
        "Florence",
        "Amalfi",
        "Tuscany",

        "Tokyo",
        "Kyoto",
        "Hakone",

        "Interlaken",
        "Zermatt",

        "Dubai",
        "Abu Dhabi",

        "Bangkok",
        "Phuket",
        "Chiang Mai",

        "Bali",
        "Ubud",

        "Sydney",
        "Gold Coast",

        "Reykjavik",
        "Vik",

        "Lapland",

        "New York"
    ];

    const text = query.toLowerCase();

    const found = destinations.find(destination =>
        text.includes(destination.toLowerCase())
    );

    return found || null;
}


function extractAmenities(query) {

    const amenities = [
        "WiFi",
        "Parking",
        "Swimming Pool",
        "Air Conditioning",
        "Kitchen",
        "Garden",
        "Fireplace",
        "Mountain View",
        "Lake View",
        "Sea View",
        "Beach Access",
        "Breakfast",
        "Restaurant",
        "Gym",
        "Heating"
    ];

    const text = query.toLowerCase();

    return amenities.filter(amenity =>
        text.includes(amenity.toLowerCase())
    );
}


// Show AI Travel Assistant page
module.exports.renderAssistant = (req, res) => {
    res.render("travel/assistant.ejs");
};

// Generate recommendations
module.exports.recommend = async (req, res) => {
console.log("RECOMMEND ROUTE HIT");
    let {
        destination,
        maxPrice,
        guests,
        propertyType,
        category,
        bedrooms,
        amenities,
        query
    } = req.body;

    console.log("FORM DATA:", req.body);

    // Understand natural-language request
if (query && query.trim()) {

    const text = query.trim();

    destination =
        destination || extractDestination(text);

    maxPrice =
        maxPrice || extractBudget(text);

    guests =
        guests || extractGuests(text);

    bedrooms =
        bedrooms || extractBedrooms(text);

    propertyType =
        propertyType || extractPropertyType(text);

    category =
        category || extractCategory(text);

    const extractedAmenities = extractAmenities(text);

    if (!amenities && extractedAmenities.length > 0) {
        amenities = extractedAmenities.join(",");
    }
}

    let filter = {};

    // Destination
    if (destination) {
        const searchRegex = new RegExp(destination, "i");

        filter.$or = [
            { location: searchRegex },
            { country: searchRegex },
            { title: searchRegex },
            { description: searchRegex }
        ];
    }

    // Maximum price
    if (maxPrice) {
        filter.price = {
            $lte: Number(maxPrice)
        };
    }

    // Guests
    if (guests) {
        filter.guests = {
            $gte: Number(guests)
        };
    }

    // Property type
    if (propertyType) {
        filter.propertyType = propertyType;
    }

    // Category
    if (category) {
        filter.category = category;
    }

    // Bedrooms
    if (bedrooms) {
        filter.bedrooms = {
            $gte: Number(bedrooms)
        };
    }

    // Amenities
    if (amenities) {

        const amenityList = amenities
            .split(",")
            .map(item => item.trim())
            .filter(item => item.length > 0);

        if (amenityList.length > 0) {
            filter.amenities = {
                $all: amenityList
            };
        }
    }

    const recommendations = await Listing.find(filter);

    res.render("travel/results.ejs", {
        recommendations
    });
};