const fs = require('fs')

module.exports = (file) => {
    // Get the data of the input file
    let readFile = fs.readFileSync(file)
    let movies = JSON.parse(readFile)
    let overviews = getOverviewsArray(movies)

    console.log(overviews);
}

function getOverviewsArray(movies) {
    let overviewsArray = []

    // Create an array for each movie with all words of his overview
    for (let i = 0; i < movies.length; i++) {
        const overviews = movies[i].overview.split(' ');
        const overview = []
        
        // D'ont push words with less than 4 letters
        for (let j = 0; j < overviews.length; j++) {
            let word
            const lastLetter = overviews[j][overviews[j].length-1]

            // Delete dots and commas at the end of words
            if (lastLetter == ',' || lastLetter == '.') {
                word = overviews[j].slice(0, -1)
            } else {
                word = overviews[j]
            }
            if (word.length > 3) {
                overview.push(word)
            }
        }
        let obj = {
            "id": movies[i].id,
            "overview": overview
        }
        overviewsArray.push(obj)
    }
    return overviewsArray
}