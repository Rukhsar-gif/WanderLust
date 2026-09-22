const sampleListings = [

    // =========================
    // INDIA
    // =========================

    {
        title: "Luxury Beach Villa",
        description: "A modern private villa close to the beaches of North Goa with a pool, garden and spacious rooms.",
        image: {
            filename: "wanderlust/goa-villa",
            url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791"
        },
        price: 8500,
        location: "Goa",
        country: "India",
        category: "Amazing Pools",
        propertyType: "Villa",
        guests: 6,
        bedrooms: 3,
        beds: 4,
        bathrooms: 3,
        amenities: ["WiFi", "Swimming Pool", "Parking", "Air Conditioning", "Kitchen"]
    },

    {
        title: "Goa Beachside Apartment",
        description: "A comfortable apartment near Calangute beach, perfect for couples and small families.",
        image: {
            filename: "wanderlust/goa-apartment",
            url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
        },
        price: 4200,
        location: "Goa",
        country: "India",
        category: "Trending",
        propertyType: "Apartment",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        bathrooms: 2,
        amenities: ["WiFi", "Parking", "Air Conditioning", "Kitchen"]
    },

    {
        title: "Ocean View Goa Cottage",
        description: "A peaceful cottage surrounded by greenery with easy access to the beach.",
        image: {
            filename: "wanderlust/goa-cottage",
            url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
        },
        price: 5500,
        location: "Goa",
        country: "India",
        category: "Trending",
        propertyType: "Cottage",
        guests: 4,
        bedrooms: 2,
        beds: 3,
        bathrooms: 2,
        amenities: ["WiFi", "Parking", "Garden", "Air Conditioning"]
    },

    {
        title: "Mountain View Cabin",
        description: "A cozy wooden cabin surrounded by Himalayan mountains and pine forests.",
        image: {
            filename: "wanderlust/manali-cabin",
            url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739"
        },
        price: 4800,
        location: "Manali",
        country: "India",
        category: "Mountains",
        propertyType: "Cabin",
        guests: 4,
        bedrooms: 2,
        beds: 3,
        bathrooms: 2,
        amenities: ["WiFi", "Parking", "Fireplace", "Mountain View", "Kitchen"]
    },

    {
        title: "Himalayan Luxury Retreat",
        description: "A spacious mountain retreat with panoramic valley views and comfortable interiors.",
        image: {
            filename: "wanderlust/manali-retreat",
            url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8"
        },
        price: 7200,
        location: "Manali",
        country: "India",
        category: "Mountains",
        propertyType: "Cottage",
        guests: 6,
        bedrooms: 3,
        beds: 4,
        bathrooms: 3,
        amenities: ["WiFi", "Parking", "Fireplace", "Mountain View", "Garden"]
    },

    {
        title: "Royal Jaipur Haveli",
        description: "A heritage-inspired stay featuring traditional architecture and peaceful courtyards.",
        image: {
            filename: "wanderlust/jaipur-haveli",
            url: "https://images.unsplash.com/photo-1599661046289-e31897846e41"
        },
        price: 5200,
        location: "Jaipur",
        country: "India",
        category: "Castles",
        propertyType: "Hotel",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        bathrooms: 2,
        amenities: ["WiFi", "Parking", "Restaurant", "Air Conditioning", "Garden"]
    },

    {
        title: "Pink City Heritage Hotel",
        description: "A boutique heritage hotel located near Jaipur's historic attractions.",
        image: {
            filename: "wanderlust/jaipur-hotel",
            url: "https://images.unsplash.com/photo-1548013146-72479768bada"
        },
        price: 3800,
        location: "Jaipur",
        country: "India",
        category: "Iconic Cities",
        propertyType: "Hotel",
        guests: 3,
        bedrooms: 1,
        beds: 2,
        bathrooms: 1,
        amenities: ["WiFi", "Air Conditioning", "Restaurant", "Room Service"]
    },

    {
        title: "Udaipur Lake Palace Stay",
        description: "A luxurious heritage stay overlooking the beautiful lakes of Udaipur.",
        image: {
            filename: "wanderlust/udaipur-palace",
            url: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e"
        },
        price: 9500,
        location: "Udaipur",
        country: "India",
        category: "Castles",
        propertyType: "Hotel",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        bathrooms: 2,
        amenities: ["WiFi", "Lake View", "Restaurant", "Swimming Pool", "Parking"]
    },

    {
        title: "Rishikesh Riverside Camp",
        description: "A riverside camping retreat surrounded by nature and adventure activities.",
        image: {
            filename: "wanderlust/rishikesh-camp",
            url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4"
        },
        price: 2800,
        location: "Rishikesh",
        country: "India",
        category: "Camping",
        propertyType: "Other",
        guests: 4,
        bedrooms: 1,
        beds: 2,
        bathrooms: 1,
        amenities: ["Parking", "River View", "Breakfast", "Fireplace"]
    },

    {
        title: "Nainital Lakeside Cottage",
        description: "A cozy cottage overlooking the lake with peaceful surroundings.",
        image: {
            filename: "wanderlust/nainital-cottage",
            url: "https://images.unsplash.com/photo-1448375240586-882707db888b"
        },
        price: 4500,
        location: "Nainital",
        country: "India",
        category: "Mountains",
        propertyType: "Cottage",
        guests: 4,
        bedrooms: 2,
        beds: 3,
        bathrooms: 2,
        amenities: ["WiFi", "Lake View", "Parking", "Kitchen"]
    },

    {
        title: "Mumbai Skyline Apartment",
        description: "A modern apartment with city views in the heart of Mumbai.",
        image: {
            filename: "wanderlust/mumbai-apartment",
            url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
        },
        price: 6500,
        location: "Mumbai",
        country: "India",
        category: "Iconic Cities",
        propertyType: "Apartment",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        bathrooms: 2,
        amenities: ["WiFi", "Air Conditioning", "Parking", "Kitchen", "City View"]
    },

    {
        title: "Indore Garden Farm Stay",
        description: "A peaceful farm stay surrounded by greenery, ideal for families and weekend escapes.",
        image: {
            filename: "wanderlust/indore-farm",
            url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        },
        price: 3200,
        location: "Indore",
        country: "India",
        category: "Farms",
        propertyType: "Farm",
        guests: 6,
        bedrooms: 3,
        beds: 4,
        bathrooms: 2,
        amenities: ["WiFi", "Parking", "Garden", "Kitchen", "Breakfast"]
    },

    {
        title: "Kerala Backwater Villa",
        description: "A peaceful villa beside Kerala's backwaters with tropical gardens and beautiful views.",
        image: {
            filename: "wanderlust/kerala-villa",
            url: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6"
        },
        price: 7800,
        location: "Alappuzha",
        country: "India",
        category: "Amazing Pools",
        propertyType: "Villa",
        guests: 6,
        bedrooms: 3,
        beds: 4,
        bathrooms: 3,
        amenities: ["WiFi", "Swimming Pool", "Garden", "Parking", "Kitchen"]
    },

    {
        title: "Darjeeling Tea Estate Cottage",
        description: "A charming cottage surrounded by tea gardens and Himalayan scenery.",
        image: {
            filename: "wanderlust/darjeeling-cottage",
            url: "https://images.unsplash.com/photo-1470214304380-aadaedcfff1b"
        },
        price: 3900,
        location: "Darjeeling",
        country: "India",
        category: "Mountains",
        propertyType: "Cottage",
        guests: 4,
        bedrooms: 2,
        beds: 3,
        bathrooms: 2,
        amenities: ["WiFi", "Mountain View", "Garden", "Parking"]
    },

    // =========================
    // FRANCE
    // =========================

    {
        title: "Paris City Apartment",
        description: "A stylish apartment in central Paris close to cafes, museums and famous landmarks.",
        image: {
            filename: "wanderlust/paris-apartment",
            url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
        },
        price: 14500,
        location: "Paris",
        country: "France",
        category: "Iconic Cities",
        propertyType: "Apartment",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        bathrooms: 1,
        amenities: ["WiFi", "Kitchen", "Air Conditioning", "City View"]
    },

    {
        title: "Paris Luxury Residence",
        description: "An elegant city residence with modern interiors and easy access to central Paris.",
        image: {
            filename: "wanderlust/paris-residence",
            url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
        },
        price: 22000,
        location: "Paris",
        country: "France",
        category: "Trending",
        propertyType: "Apartment",
        guests: 5,
        bedrooms: 3,
        beds: 3,
        bathrooms: 2,
        amenities: ["WiFi", "Kitchen", "City View", "Air Conditioning", "Elevator"]
    },

    {
        title: "Nice Mediterranean Villa",
        description: "A bright villa near the French Riviera with a private pool and garden.",
        image: {
            filename: "wanderlust/nice-villa",
            url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
        },
        price: 18000,
        location: "Nice",
        country: "France",
        category: "Amazing Pools",
        propertyType: "Villa",
        guests: 6,
        bedrooms: 3,
        beds: 4,
        bathrooms: 3,
        amenities: ["WiFi", "Swimming Pool", "Garden", "Parking", "Kitchen"]
    },

    {
        title: "Chamonix Alpine Cabin",
        description: "A traditional alpine cabin surrounded by dramatic mountain scenery.",
        image: {
            filename: "wanderlust/chamonix-cabin",
            url: "https://images.unsplash.com/photo-1544986581-efac024faf62"
        },
        price: 12500,
        location: "Chamonix",
        country: "France",
        category: "Mountains",
        propertyType: "Cabin",
        guests: 6,
        bedrooms: 3,
        beds: 4,
        bathrooms: 2,
        amenities: ["WiFi", "Fireplace", "Mountain View", "Parking", "Kitchen"]
    },

    {
        title: "French Countryside Cottage",
        description: "A quiet countryside cottage surrounded by gardens and rolling landscapes.",
        image: {
            filename: "wanderlust/france-cottage",
            url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739"
        },
        price: 9500,
        location: "Provence",
        country: "France",
        category: "Farms",
        propertyType: "Cottage",
        guests: 4,
        bedrooms: 2,
        beds: 3,
        bathrooms: 2,
        amenities: ["WiFi", "Garden", "Parking", "Kitchen", "Breakfast"]
    },

    // =========================
    // ITALY
    // =========================

    {
        title: "Rome Historic Apartment",
        description: "A comfortable apartment located near Rome's historic attractions and restaurants.",
        image: {
            filename: "wanderlust/rome-apartment",
            url: "https://images.unsplash.com/photo-1529260830199-42c24126f198"
        },
        price: 11000,
        location: "Rome",
        country: "Italy",
        category: "Iconic Cities",
        propertyType: "Apartment",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        bathrooms: 1,
        amenities: ["WiFi", "Kitchen", "Air Conditioning", "City View"]
    },

    {
        title: "Roman Luxury Hotel",
        description: "A stylish hotel stay close to historic landmarks and local dining.",
        image: {
            filename: "wanderlust/rome-hotel",
            url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
        },
        price: 13500,
        location: "Rome",
        country: "Italy",
        category: "Trending",
        propertyType: "Hotel",
        guests: 3,
        bedrooms: 1,
        beds: 2,
        bathrooms: 1,
        amenities: ["WiFi", "Restaurant", "Air Conditioning", "Room Service"]
    },

    {
        title: "Florence Renaissance Stay",
        description: "A charming apartment inspired by Florence's historic architecture.",
        image: {
            filename: "wanderlust/florence-stay",
            url: "https://images.unsplash.com/photo-1543429776-2782fc8e1acd"
        },
        price: 9800,
        location: "Florence",
        country: "Italy",
        category: "Iconic Cities",
        propertyType: "Apartment",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        bathrooms: 1,
        amenities: ["WiFi", "Kitchen", "City View", "Air Conditioning"]
    },

    {
        title: "Amalfi Cliffside Villa",
        description: "A beautiful coastal villa with panoramic views of the Mediterranean Sea.",
        image: {
            filename: "wanderlust/amalfi-villa",
            url: "https://images.unsplash.com/photo-1533105079780-92b9be482077"
        },
        price: 25000,
        location: "Amalfi",
        country: "Italy",
        category: "Amazing Pools",
        propertyType: "Villa",
        guests: 6,
        bedrooms: 3,
        beds: 4,
        bathrooms: 3,
        amenities: ["WiFi", "Swimming Pool", "Sea View", "Kitchen", "Parking"]
    },

    {
        title: "Tuscan Farm Retreat",
        description: "A peaceful farmhouse surrounded by vineyards and rolling Tuscan countryside.",
        image: {
            filename: "wanderlust/tuscany-farm",
            url: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc"
        },
        price: 10500,
        location: "Tuscany",
        country: "Italy",
        category: "Farms",
        propertyType: "Farm",
        guests: 5,
        bedrooms: 3,
        beds: 3,
        bathrooms: 2,
        amenities: ["WiFi", "Garden", "Parking", "Breakfast", "Kitchen"]
    },

    // =========================
    // JAPAN
    // =========================

    {
        title: "Tokyo Skyline Apartment",
        description: "A modern apartment with excellent city views and easy access to Tokyo attractions.",
        image: {
            filename: "wanderlust/tokyo-apartment",
            url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf"
        },
        price: 12000,
        location: "Tokyo",
        country: "Japan",
        category: "Iconic Cities",
        propertyType: "Apartment",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        bathrooms: 1,
        amenities: ["WiFi", "Air Conditioning", "Kitchen", "City View"]
    },

    {
        title: "Kyoto Traditional House",
        description: "A peaceful traditional-style Japanese house close to temples and cultural attractions.",
        image: {
            filename: "wanderlust/kyoto-house",
            url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e"
        },
        price: 13500,
        location: "Kyoto",
        country: "Japan",
        category: "Iconic Cities",
        propertyType: "House",
        guests: 4,
        bedrooms: 2,
        beds: 3,
        bathrooms: 1,
        amenities: ["WiFi", "Garden", "Kitchen", "Heating"]
    },

    {
        title: "Hakone Mountain Ryokan",
        description: "A peaceful mountain retreat inspired by traditional Japanese hospitality.",
        image: {
            filename: "wanderlust/hakone-stay",
            url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186"
        },
        price: 16000,
        location: "Hakone",
        country: "Japan",
        category: "Mountains",
        propertyType: "Hotel",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        bathrooms: 2,
        amenities: ["WiFi", "Mountain View", "Breakfast", "Heating"]
    },

    {
        title: "Tokyo Compact City Stay",
        description: "A modern compact apartment ideal for travelers exploring Tokyo.",
        image: {
            filename: "wanderlust/tokyo-compact",
            url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390"
        },
        price: 8500,
        location: "Tokyo",
        country: "Japan",
        category: "Trending",
        propertyType: "Apartment",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        bathrooms: 1,
        amenities: ["WiFi", "Air Conditioning", "Kitchen"]
    },

    // =========================
    // SWITZERLAND
    // =========================

    {
        title: "Interlaken Alpine Cabin",
        description: "A cozy cabin surrounded by Swiss Alps and beautiful mountain landscapes.",
        image: {
            filename: "wanderlust/interlaken-cabin",
            url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
        },
        price: 17500,
        location: "Interlaken",
        country: "Switzerland",
        category: "Mountains",
        propertyType: "Cabin",
        guests: 4,
        bedrooms: 2,
        beds: 3,
        bathrooms: 2,
        amenities: ["WiFi", "Mountain View", "Fireplace", "Parking", "Kitchen"]
    },

    {
        title: "Interlaken Lakeside Cottage",
        description: "A peaceful cottage near the Swiss lakes with spectacular views.",
        image: {
            filename: "wanderlust/interlaken-cottage",
            url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
        },
        price: 21000,
        location: "Interlaken",
        country: "Switzerland",
        category: "Trending",
        propertyType: "Cottage",
        guests: 5,
        bedrooms: 3,
        beds: 3,
        bathrooms: 2,
        amenities: ["WiFi", "Lake View", "Kitchen", "Parking", "Garden"]
    },

    {
        title: "Zermatt Mountain Lodge",
        description: "A stylish mountain lodge with panoramic views of the surrounding Alps.",
        image: {
            filename: "wanderlust/zermatt-lodge",
            url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
        },
        price: 23000,
        location: "Zermatt",
        country: "Switzerland",
        category: "Mountains",
        propertyType: "Hotel",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        bathrooms: 2,
        amenities: ["WiFi", "Mountain View", "Breakfast", "Fireplace"]
    },

    {
        title: "Swiss Alpine Farmhouse",
        description: "A traditional farmhouse surrounded by green valleys and mountain scenery.",
        image: {
            filename: "wanderlust/swiss-farm",
            url: "https://images.unsplash.com/photo-1464278533981-50106e6176b1"
        },
        price: 15000,
        location: "Zermatt",
        country: "Switzerland",
        category: "Farms",
        propertyType: "Farm",
        guests: 6,
        bedrooms: 3,
        beds: 4,
        bathrooms: 2,
        amenities: ["WiFi", "Garden", "Mountain View", "Parking", "Kitchen"]
    },

    // =========================
    // UAE
    // =========================

    {
        title: "Dubai Skyline Apartment",
        description: "A modern luxury apartment with impressive city skyline views.",
        image: {
            filename: "wanderlust/dubai-apartment",
            url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
        },
        price: 14000,
        location: "Dubai",
        country: "United Arab Emirates",
        category: "Iconic Cities",
        propertyType: "Apartment",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        bathrooms: 2,
        amenities: ["WiFi", "Swimming Pool", "Air Conditioning", "Parking", "Gym"]
    },

    {
        title: "Dubai Luxury Pool Villa",
        description: "A spacious private villa with a swimming pool and modern interiors.",
        image: {
            filename: "wanderlust/dubai-villa",
            url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811"
        },
        price: 28000,
        location: "Dubai",
        country: "United Arab Emirates",
        category: "Amazing Pools",
        propertyType: "Villa",
        guests: 8,
        bedrooms: 4,
        beds: 5,
        bathrooms: 4,
        amenities: ["WiFi", "Swimming Pool", "Parking", "Kitchen", "Air Conditioning"]
    },

    {
        title: "Abu Dhabi Beach Hotel",
        description: "A comfortable hotel near the beach with modern facilities.",
        image: {
            filename: "wanderlust/abu-dhabi-hotel",
            url: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
        },
        price: 11000,
        location: "Abu Dhabi",
        country: "United Arab Emirates",
        category: "Trending",
        propertyType: "Hotel",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        bathrooms: 2,
        amenities: ["WiFi", "Swimming Pool", "Beach Access", "Restaurant", "Gym"]
    },

    // =========================
    // THAILAND
    // =========================

    {
        title: "Bangkok City Apartment",
        description: "A modern apartment in central Bangkok close to shopping and restaurants.",
        image: {
            filename: "wanderlust/bangkok-apartment",
            url: "https://images.unsplash.com/photo-1508009603885-50cf7c579365"
        },
        price: 5500,
        location: "Bangkok",
        country: "Thailand",
        category: "Iconic Cities",
        propertyType: "Apartment",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        bathrooms: 1,
        amenities: ["WiFi", "Swimming Pool", "Air Conditioning", "Kitchen"]
    },

    {
        title: "Phuket Tropical Villa",
        description: "A tropical private villa with a pool and easy access to Phuket beaches.",
        image: {
            filename: "wanderlust/phuket-villa",
            url: "https://images.unsplash.com/photo-1582610116397-edb318620f90"
        },
        price: 9000,
        location: "Phuket",
        country: "Thailand",
        category: "Amazing Pools",
        propertyType: "Villa",
        guests: 6,
        bedrooms: 3,
        beds: 4,
        bathrooms: 3,
        amenities: ["WiFi", "Swimming Pool", "Beach Access", "Kitchen", "Garden"]
    },

    {
        title: "Chiang Mai Garden House",
        description: "A quiet traditional-style house surrounded by tropical greenery.",
        image: {
            filename: "wanderlust/chiang-mai-house",
            url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"
        },
        price: 4200,
        location: "Chiang Mai",
        country: "Thailand",
        category: "Farms",
        propertyType: "House",
        guests: 4,
        bedrooms: 2,
        beds: 3,
        bathrooms: 2,
        amenities: ["WiFi", "Garden", "Kitchen", "Parking"]
    },

    // =========================
    // INDONESIA
    // =========================

    {
        title: "Bali Private Pool Villa",
        description: "A tropical villa in Bali with a private pool and relaxing outdoor space.",
        image: {
            filename: "wanderlust/bali-villa",
            url: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8"
        },
        price: 8500,
        location: "Bali",
        country: "Indonesia",
        category: "Amazing Pools",
        propertyType: "Villa",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        bathrooms: 2,
        amenities: ["WiFi", "Swimming Pool", "Garden", "Kitchen", "Air Conditioning"]
    },

    {
        title: "Ubud Jungle Cottage",
        description: "A peaceful cottage surrounded by tropical forest and rice fields.",
        image: {
            filename: "wanderlust/ubud-cottage",
            url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4"
        },
        price: 6500,
        location: "Ubud",
        country: "Indonesia",
        category: "Farms",
        propertyType: "Cottage",
        guests: 3,
        bedrooms: 1,
        beds: 2,
        bathrooms: 1,
        amenities: ["WiFi", "Garden", "Breakfast", "Kitchen"]
    },

    {
        title: "Bali Beach House",
        description: "A spacious beachside house designed for relaxing tropical holidays.",
        image: {
            filename: "wanderlust/bali-beach-house",
            url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        },
        price: 7200,
        location: "Bali",
        country: "Indonesia",
        category: "Trending",
        propertyType: "House",
        guests: 6,
        bedrooms: 3,
        beds: 4,
        bathrooms: 2,
        amenities: ["WiFi", "Beach Access", "Kitchen", "Garden", "Air Conditioning"]
    },

    // =========================
    // AUSTRALIA
    // =========================

    {
        title: "Sydney Harbour Apartment",
        description: "A modern apartment with city and harbour views near central Sydney.",
        image: {
            filename: "wanderlust/sydney-apartment",
            url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d7"
        },
        price: 16000,
        location: "Sydney",
        country: "Australia",
        category: "Iconic Cities",
        propertyType: "Apartment",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        bathrooms: 2,
        amenities: ["WiFi", "City View", "Kitchen", "Air Conditioning", "Parking"]
    },

    {
        title: "Gold Coast Beach Villa",
        description: "A bright coastal villa close to the beach with a private pool.",
        image: {
            filename: "wanderlust/gold-coast-villa",
            url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
        },
        price: 17500,
        location: "Gold Coast",
        country: "Australia",
        category: "Amazing Pools",
        propertyType: "Villa",
        guests: 6,
        bedrooms: 3,
        beds: 4,
        bathrooms: 3,
        amenities: ["WiFi", "Swimming Pool", "Beach Access", "Parking", "Kitchen"]
    },

    {
        title: "Sydney Coastal House",
        description: "A spacious family house near the coast with modern amenities.",
        image: {
            filename: "wanderlust/sydney-house",
            url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        },
        price: 13500,
        location: "Sydney",
        country: "Australia",
        category: "Trending",
        propertyType: "House",
        guests: 6,
        bedrooms: 3,
        beds: 4,
        bathrooms: 2,
        amenities: ["WiFi", "Parking", "Kitchen", "Garden", "Air Conditioning"]
    },

    // =========================
    // ICELAND
    // =========================

    {
        title: "Reykjavik Nordic Apartment",
        description: "A warm Scandinavian-style apartment in central Reykjavik.",
        image: {
            filename: "wanderlust/reykjavik-apartment",
            url: "https://images.unsplash.com/photo-1504893524553-b855bce32c67"
        },
        price: 14500,
        location: "Reykjavik",
        country: "Iceland",
        category: "Iconic Cities",
        propertyType: "Apartment",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        bathrooms: 1,
        amenities: ["WiFi", "Heating", "Kitchen", "Parking"]
    },

    {
        title: "Icelandic Countryside Cabin",
        description: "A remote cabin surrounded by dramatic Icelandic landscapes.",
        image: {
            filename: "wanderlust/iceland-cabin",
            url: "https://images.unsplash.com/photo-1520637836862-4d197d17c52a"
        },
        price: 18000,
        location: "Vik",
        country: "Iceland",
        category: "Arctic",
        propertyType: "Cabin",
        guests: 4,
        bedrooms: 2,
        beds: 3,
        bathrooms: 1,
        amenities: ["WiFi", "Heating", "Mountain View", "Fireplace", "Parking"]
    },

    // =========================
    // FINLAND
    // =========================

    {
        title: "Lapland Glass Cabin",
        description: "A cozy glass-roof cabin designed for viewing the northern sky.",
        image: {
            filename: "wanderlust/lapland-cabin",
            url: "https://images.unsplash.com/photo-1517825738774-7de9363ef735"
        },
        price: 20000,
        location: "Lapland",
        country: "Finland",
        category: "Arctic",
        propertyType: "Cabin",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        bathrooms: 1,
        amenities: ["WiFi", "Heating", "Fireplace", "Mountain View", "Breakfast"]
    },

    {
        title: "Finnish Forest Cottage",
        description: "A peaceful wooden cottage surrounded by forests and snow-covered landscapes.",
        image: {
            filename: "wanderlust/finland-cottage",
            url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739"
        },
        price: 14500,
        location: "Lapland",
        country: "Finland",
        category: "Arctic",
        propertyType: "Cottage",
        guests: 4,
        bedrooms: 2,
        beds: 3,
        bathrooms: 1,
        amenities: ["WiFi", "Heating", "Fireplace", "Parking", "Kitchen"]
    },

    // =========================
    // USA
    // =========================

    {
        title: "New York Skyline Apartment",
        description: "A stylish city apartment close to restaurants, shopping and major attractions.",
        image: {
            filename: "wanderlust/new-york-apartment",
            url: "https://images.unsplash.com/photo-1522083165195-3424ed129620"
        },
        price: 22000,
        location: "New York",
        country: "United States",
        category: "Iconic Cities",
        propertyType: "Apartment",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        bathrooms: 1,
        amenities: ["WiFi", "City View", "Kitchen", "Air Conditioning"]
    }

];

module.exports = { data: sampleListings };