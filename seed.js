// seed.js
const mongoose = require('mongoose');
const Plant = require('./src/models/Plant'); // Ensure the path is correct
const connectDB = require('./src/config'); // Ensure the path is correct

const seedData = async () => {
    await connectDB(); // Connect to MongoDB

    const plants = [
        { name: "Water Hyacinth", type: "Aquatic", condition: "Healthy", notes: "Grows rapidly in water" },
        { name: "Cactus", type: "Cactus", condition: "Good", notes: "Minimal watering required" },
    ];

    try {
        await Plant.deleteMany({});
        console.log("Database cleared");

        await Plant.insertMany(plants);
        console.log("Database seeded with initial data");

        mongoose.connection.close();
    } catch (err) {
        console.error("Failed to seed data", err);
    }
};

seedData();
