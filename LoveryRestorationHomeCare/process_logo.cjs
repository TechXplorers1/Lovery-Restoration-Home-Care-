const { Jimp } = require('jimp');

async function processImage() {
  try {
    // Read the uploaded image
    const imagePath = 'public/user-logo.png';
    console.log('Reading image:', imagePath);
    
    // Jimp 1.x syntax
    const image = await Jimp.read(imagePath);
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      const a = this.bitmap.data[idx + 3];
      
      // If the pixel is mostly white/light gray (background)
      // The threshold can be high, e.g. > 230 to remove the white background
      if (r > 240 && g > 240 && b > 240) {
        // Make transparent
        this.bitmap.data[idx + 3] = 0;
      }
      // Keep everything else (black text, pink/purple text) exactly as it is!
      // No other else blocks needed.
      // For colored pixels (Pink "Home" and Purple "Care"), keep them as is!
      // They won't hit the grey conditions above because Math.abs(r-g) or similar will be large.
    });

    const outputPath = 'public/logo-black.png';
    await image.write(outputPath);
    console.log('Successfully saved to', outputPath);
    
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

processImage();
