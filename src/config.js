const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Created separate connections for each database
        const plantdb = mongoose.createConnection('mongodb://localhost:27017/plantsdb');
        const loginDB = mongoose.createConnection('mongodb://localhost:27017/Login');

        console.log('MongoDB connected to both databases');
        return { plantdb, loginDB }; // Return both connections
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit the process if the connection fails
    }
};

module.exports = connectDB;
