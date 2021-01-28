const fs = require('fs')

module.exports = {
    searchDate: (file, year, sort) => {
        // Get the data of the file
        let readFile = fs.readFileSync(file)
        let data = JSON.parse(readFile)

        if (sort == 'true') {
            //dichotomicSearch(data, parseInt(year))
            basicSearch(data, parseInt(year))

        } else {
            basicSearch(data, parseInt(year))
        }
    }
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

function basicSearch(movies, year) {
    let count = 0
    for (let i = 0; i < movies.length; i++) {
        // Get the year of the release date
        let releaseYear = getYear(movies[i].release_date)
        
        if (releaseYear == year) {
            count++
            console.log(movies[i].title);
        }
    }
    if (count == 0) {
        console.log(`Aucun film n'a été trouvé pour l'année ${year}`)
    }
}

function getYear(time) {
    let date = new Date(time * 1000)
    let year = date.getFullYear()
    return year
}