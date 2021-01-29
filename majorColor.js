const Jimp = require("jimp");

module.exports = () =>
{
    Jimp.read('https://image.tmdb.org/t/p/w500/oljiDFPyMY437BRRV69AzVDSiKy.jpg', function(err, image){
        //loop through every pixel of the image
        let width = image.bitmap.width;
        let height = image.bitmap.height;
        let pixels = [];
        let pixelR = [];
        let pixelG = [];
        let pixelB = [];
        for (let y = 0; y < height; y++) 
        {
            let rowPixels = [];
            for (let x = 0; x < width; x++) 
            {
                let pixel = Jimp.intToRGBA(image.getPixelColor(x, y));
                rowPixels.push(pixel.r, pixel.g, pixel.b);

                pixelR.push(pixel.r)
                pixelG.push(pixel.g)
                pixelB.push(pixel.b)
            }
            pixels.push(rowPixels)
        }
        const pixelAvgR = pixelR.reduce((a,b) => a + b)/pixelR.length
        const pixelAvgG = pixelG.reduce((a,b) => a + b)/pixelG.length
        const pixelAvgB = pixelB.reduce((a,b) => a + b)/pixelB.length

        function RGBToHex(r,g,b) 
        {
            r = pixelAvgR.toString(16);
            g = pixelAvgG.toString(16);
            b = pixelAvgB.toString(16);
          
            if (r.length == 1)
              r = "0" + r;
            if (g.length == 1)
              g = "0" + g;
            if (b.length == 1)
              b = "0" + b;
          
            return "#" + r + g + b;
        }  
    })
}