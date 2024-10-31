const express = require('express');
const path = require('path');
const connectDB = require('./src/config'); // MongoDB connection
const uploadRouter = require('./routes/upload'); // Upload routes

//new addition when working with login page
const collection = require("./config");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware to parse form and JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Define Routes
app.get('/', (req, res) => {
    res.render('home'); // Render home page
});

app.get('/register', (req, res) => {
    res.render('register'); // Render registration page
});

app.get('/login', (req, res) => {
    res.render('login'); // Render login page
});

app.get('/upload', (req, res) => {
    res.render('upload'); // Render upload page
});

// Use upload router
app.use('/upload', uploadRouter); 

app.get('/dashboard', (req, res) => {
    res.render('dashboard'); // Render the dashboard page
});


app.get('/settings', (req, res) => {
    res.render('settings'); // Render settings page
});

// Middleware for logging requests
app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
});

// Catch-all for 404
app.use((req, res) => {
    res.status(404).send('404: Page Not Found');
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

