const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();
const upload = multer({ dest: path.join(__dirname, '../upload/') }); // Ensure directory exists

// Handle file upload
router.post('/', upload.single('file'), (req, res) => {
    // Log the uploaded file and form data
    console.log('Uploaded file:', req.file);
    console.log('Plant name:', req.body.plantName);
    console.log('Notes:', req.body.notes);

    // Redirect to success page
    res.redirect('/success');
});

module.exports = router;
