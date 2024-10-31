const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const plantsDB = await mongoose.createConnection('mongodb://localhost:27017/plantsdb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const loginDB = await mongoose.createConnection('mongodb://localhost:27017/login', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connected to both databases');
        return { plantsDB, loginDB };
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
