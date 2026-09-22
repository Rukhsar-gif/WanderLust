const Joi = require('joi');

// module.exports.listingSchema = Joi.object({
//     listing : Joi.object({
//         title: Joi.string().required(),
//         description: Joi.string().required(),
//         location: Joi.string().required(),
//         country: Joi.string().required(),
//         price: Joi.number().required().min(0),
//         image: Joi.object({
//             filename: Joi.string().allow("", null),
//             url: Joi.string().allow("", null)
//         }).optional()
//     }).required()
// });


module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),

        description: Joi.string().required(),

        image: Joi.object({
            filename: Joi.string().allow("", null),
            url: Joi.string().allow("", null)
        }).optional(),

        location: Joi.string().required(),

        country: Joi.string().required(),

        price: Joi.number().required().min(0),

        category: Joi.string()
            .valid(
                "Trending",
                "Rooms",
                "Iconic Cities",
                "Mountains",
                "Castles",
                "Amazing Pools",
                "Camping",
                "Farms",
                "Arctic"
            )
            .required(),

        propertyType: Joi.string()
            .valid(
                "House",
                "Apartment",
                "Villa",
                "Cabin",
                "Hotel",
                "Farm",
                "Cottage",
                "Other"
            )
            .required(),

        guests: Joi.number().integer().min(1).required(),

        bedrooms: Joi.number().integer().min(1).required(),

        beds: Joi.number().integer().min(1).required(),

        bathrooms: Joi.number().integer().min(1).required(),

        amenities: Joi.alternatives().try(
            Joi.array().items(Joi.string()),
            Joi.string()
        )

        

    }).required()
});


module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().min(1).max(5).required(),
        comment: Joi.string().required(),
    }).required()
});