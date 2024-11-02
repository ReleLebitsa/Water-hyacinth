// services/imageProcessing.js
const cv = require('opencv4nodejs'); // Assuming you're using opencv4nodejs for OpenCV in Node.js

async function analyzeImage(imagePath) {
    const image = await cv.imreadAsync(imagePath);

    // Convert to grayscale
    const gray = await image.cvtColorAsync(cv.COLOR_BGR2GRAY);
    
    // Apply Gaussian blur
    const blurred = await gray.gaussianBlurAsync(new cv.Size(5, 5), 0);

    // Thresholding to isolate features
    const thresh = await blurred.thresholdAsync(60, 255, cv.THRESH_BINARY_INV);

    // Find contours
    const contours = await thresh.findContoursAsync(cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);

    if (!contours.length) {
        throw new Error('No lamina detected.');
    }

    // Assume the largest contour is the lamina
    const laminaContour = contours.sort((a, b) => b.area - a.area)[0];
    const laminaArea = laminaContour.area;

    // Identify scars (small contours)
    const scarContours = contours.filter(contour => contour.area < 1000);
    const scarsArea = scarContours.reduce((acc, contour) => acc + contour.area, 0);

    // Calculate percentage damage
    const damagePercentage = (scarsArea / laminaArea) * 100;

    return {
        damagePercentage: parseFloat(damagePercentage.toFixed(2)),
        scarsCount: scarContours.length,
        laminaArea: parseFloat(laminaArea.toFixed(2)),
    };
}

module.exports = { analyzeImage };
