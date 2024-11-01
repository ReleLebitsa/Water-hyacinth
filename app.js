const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt'); // Required for password hashing
const connectDB = require('./src/config'); //  MongoDB connection path
const uploadRouter = require('./routes/upload'); // Upload routes
const User = require('./src/models/User'); // Import User model

// Corrected login collection import
const collection = require('./src/config'); // Ensure correct path

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();
const { plantdb, loginDB } = require('./src/config')();  //added


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

app.get('/plant', (req, res) => {
    res.render('plant'); //Render the plant page
})

app.get('/settings', (req, res) => {
    res.render('settings'); // Render settings page
});

// POST route for registration
app.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        // Save user to the database
        await newUser.save();
        res.status(201).send('User registered successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
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
