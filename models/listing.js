const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");


// const listingSchema = new Schema({ 
//     title: {
//         type: String,
//         required: true,
//     },
//     description: String,
//     image: {
//         url: String,
//         filename: String
// },
//     price: Number,
//     location: String,
//     country: String,
//     reviews: [{
//         type: Schema.Types.ObjectId,
//         ref: "Review",
//     } 
//     ],
//     owner: {
//         type: Schema.Types.ObjectId,
//         ref: "User",
//     },
//     geometry: {
//         type: {
//             type: String, // Don't do `{ location: { type: String } }`
//             enum: ['Point'], // 'location.type' must be 'Point'
//             required: true
//         },
//         coordinates: {
//             type: [Number],
//             required: true
//         }
//     }
// });


// listingSchema.post("findOneAndDelete", async (listing) => {
//     if(listing) {
//         await Review.deleteMany({_id: {$in: listing.reviews}});
//     }
    
// });


const listingSchema = new Schema({ 
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    image: {
        url: String,
        filename: String
    },

    price: {
        type: Number,
        required: true,
        min: 0
    },

    location: {
        type: String,
        required: true,
    },

    country: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        enum: [
            "Trending",
            "Rooms",
            "Iconic Cities",
            "Mountains",
            "Castles",
            "Amazing Pools",
            "Camping",
            "Farms",
            "Arctic"
        ],
        default: "Trending"
    },

    propertyType: {
        type: String,
        enum: [
            "House",
            "Apartment",
            "Villa",
            "Cabin",
            "Hotel",
            "Farm",
            "Cottage",
            "Other"
        ],
        default: "House"
    },

    guests: {
        type: Number,
        min: 1,
        default: 2
    },

    bedrooms: {
        type: Number,
        min: 1,
        default: 1
    },

    beds: {
        type: Number,
        min: 1,
        default: 1
    },

    bathrooms: {
        type: Number,
        min: 1,
        default: 1
    },

    amenities: [{
        type: String
    }],

    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review",
    }],

    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },

    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports =  Listing;