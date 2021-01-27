const fs = require('fs')

module.exports = {
    searchDate: (file, year, sort) => {
        console.log('Search date function');
        console.log(`File: ${file}`);
        console.log(`Year: ${year}`);
        console.log(`Sort: ${sort}\n`);

        // Get the data of the file
        let readFile = fs.readFileSync(file)
        let data = JSON.parse(readFile)

        if (sort == 'true') {
            dichotomicSearch(data, parseInt(year))
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
    let releaseDate = movies[middle].release_date
    let date = new Date(releaseDate * 1000)
    let releaseYear = date.getFullYear()

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
        let releaseDate = movies[i].release_date
        let date = new Date(releaseDate * 1000)
        let releaseYear = date.getFullYear()

        if (releaseYear == year) {
            count++
            console.log(movies[i].title);
        }
    }
    if (count == 0) {
        console.log(`Aucun film n'a été trouvé pour l'année ${year}`)
    }
}