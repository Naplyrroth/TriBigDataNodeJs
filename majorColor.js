const Jimp = require("jimp");

module.exports = () =>
{
    Jimp.read('https://image.tmdb.org/t/p/w500/oljiDFPyMY437BRRV69AzVDSiKy.jpg', function(err, image)
    {
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
        let pixelAvgR = pixelR.reduce((a,b) => a + b)/pixelR.length
        let pixelAvgG = pixelG.reduce((a,b) => a + b)/pixelG.length
        let pixelAvgB = pixelB.reduce((a,b) => a + b)/pixelB.length

        console.log(RGBToHex(pixelAvgR, pixelAvgG, pixelAvgB));
    })
}

function RGBToHex(r,g,b) 
{
  console.log(r);
    let hexR = parseInt(r, 16);
    let hexG = parseInt(g, 16);
    let hexB = parseInt(b ,16);
    console.log(hexR);

    if (hexR.length == 1)
        hexR = "0" + hexR;
    if (hexG.length == 1)
        hexG = "0" + hexG;
    if (hexB.length == 1)
        hexB = "0" + hexB;
          
    return "#" + hexR + hexG + hexB;
}  