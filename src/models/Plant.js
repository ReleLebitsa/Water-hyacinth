// src/models/Plant.js
const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    condition: { type: String, required: true },
    notes: { type: String },
});

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;
