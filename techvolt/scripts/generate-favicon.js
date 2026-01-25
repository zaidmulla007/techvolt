const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  const inputPath = path.join(__dirname, '..', 'public', 'logo.png');
  const outputPath = path.join(__dirname, '..', 'app', 'favicon.ico');

  try {
    // Generate 32x32 favicon
    await sharp(inputPath)
      .resize(32, 32)
      .toFile(outputPath);

    console.log('Favicon generated successfully!');
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

generateFavicon();
