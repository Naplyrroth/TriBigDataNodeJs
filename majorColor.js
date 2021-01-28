const Jimp = require("jimp");

module.exports = () =>
{
    Jimp.read('https://image.tmdb.org/t/p/w500/oljiDFPyMY437BRRV69AzVDSiKy.jpg', function(err, image){
        //loop through every pixel of the image
        let width = image.bitmap.width;
        let height = image.bitmap.height;
        let pixel = [];
        for (let y = 0; y < height; y++) 
        {
            let rowPixels = [];
            for (let x = 0; x < width; x++) 
            {
            let pixel = Jimp.intToRGBA(image.getPixelColor(x, y));
            rowPixels.push(`${pixel.r}, ${pixel.g}, ${pixel.b}`);
            }
            pixel.push(rowPixels)
        }
        console.log(pixel)
    })
}