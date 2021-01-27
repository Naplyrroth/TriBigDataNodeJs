const fs = require('fs')

module.exports = (inputFile, outputFile) => {
    // Get the data of the input file
    let readFile = fs.readFileSync(inputFile)
    let data = JSON.parse(readFile)

    // Set the new title for each movie
    for (let i = 0; i < data.length; i++) {
        const movie = data[i];
        const releaseDate = new Date(movie.release_date * 1000)
        movie.title += ` ${releaseDate.getFullYear()}`
    }
    // Create the new file
    fs.writeFileSync(outputFile, JSON.stringify(data))
}