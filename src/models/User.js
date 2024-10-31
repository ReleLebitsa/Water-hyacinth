// In models/User.js
const mongoose = require('mongoose');
const { loginDB } = require('../config')(); // Access loginDB connection

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    // Additional fields like email and password can be added
});

module.exports = loginDB.model('User', UserSchema);
