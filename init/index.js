require("dotenv").config({ path: "../.env" });

// console.log("MAP TOKEN EXISTS:", !!process.env.MAP_TOKEN);

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");

const geocodingClient = mbxGeocoding({
    accessToken: process.env.MAP_TOKEN
});

const initDB = async () => {
    try {
        // Connect to MongoDB first
        await mongoose.connect(process.env.ATLASDB_URL);

        console.log("connected to database");

        // Delete old listings
        await Listing.deleteMany({});

        console.log("old listings deleted");

        // Add owner to every listing
        const listings = initData.data.map((obj) => ({
            ...obj,
            owner: "6aad47518e4e877c4ebca224"
        }));


        
        // Get coordinates for every listing
        for (let obj of listings) {
            let response = await geocodingClient.forwardGeocode({
                query: `${obj.location}, ${obj.country}`,
                limit: 1
            }).send();

            if (response.body.features.length === 0) {
                console.log(`Location not found: ${obj.location}, ${obj.country}`);
                continue;
            }

            obj.geometry = response.body.features[0].geometry;
        }

        // Insert new listings
        await Listing.insertMany(listings);

        console.log("WanderLust data was initialized");

        await mongoose.connection.close();

    } catch (err) {
        console.log("Database initialization error:", err);
        await mongoose.connection.close();
    }
};

initDB();