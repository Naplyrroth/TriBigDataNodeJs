const fs = require('fs')
const img = require('./saveImg')

module.exports = {
    searchDate: (file, year, sort, imgToSave) => {
        // Get the data of the file
        let readFile = fs.readFileSync(file)
        let data = JSON.parse(readFile)

        if (sort == 'true') {
            //sortedSearch(data, parseInt(year))
            unsortedSearch(data, parseInt(year), imgToSave)
        } else {
            unsortedSearch(data, parseInt(year), imgToSave)
        }
    }
}

function sortedSearch(movies, year, imgToSave) {
    
}

function dichotomicSearch(movies, year) {
    let middle = Math.ceil(movies.length / 2)
    let leftTab = movies.slice(0, middle)
    let rightTab = movies.slice(middle, movies.length)

    // Get the year of the release date
    let releaseYear = getYear(movies[middle].release_date)

    if (year < releaseYear) {
        dichotomicSearch(leftTab, year)
    } else if (year > releaseYear) {
        dichotomicSearch(rightTab, year) + leftTab.length
    } else if (year == releaseYear) {
        console.log(movies[middle].title)
    }
}

function unsortedSearch(movies, year, imgToSave) {
    let count = 0
    let moviesDownloaded = []

    for (let i = 0; i < movies.length; i++) {
        // Get the year of the release date
        let releaseYear = getYear(movies[i].release_date)
        
        if (releaseYear == year) {
            count++
            console.log(movies[i].title);
            // Download images if user wants to
            if (imgToSave != false) {
                img.saveImg(imgToSave, movies[i].poster, movies[i].title)
            }
            moviesDownloaded.push(movies[i])
        }
    }
    // If user wants to download images, create the JSON file with all movies who was downloaded
    if (imgToSave != false && count != 0) {
        img.createJSONfile(moviesDownloaded, imgToSave)
    }
    // Case where the search did not find a result
    if (count == 0) {
        console.log(`Aucun film n'a été trouvé pour l'année ${year}`)
    }
}

function getYear(time) {
    let date = new Date(time * 1000)
    let year = date.getFullYear()
    return year
}