/*
const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");

const app = express();

// Set view engine to EJS
app.set("view engine", "ejs");

// Set views directory (in case it’s nested differently)
app.set("views", path.join(__dirname, "views"));

// Middleware to serve static files from 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Parse URL-encoded bodies for form submissions
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
    res.render("login");
});

app.get("/register", (req, res) => {
    res.render("register");
});

// Port configuration
const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
*/
