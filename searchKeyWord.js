const fs = require('fs')
const img = require('./saveImg')

module.exports = (file, keyWord, genre, imgToSave) => {
    // Get the data of the file
    let readFile = fs.readFileSync(file)
    let allMovies = JSON.parse(readFile)
    let movies = []
    
    for (let i = 0; i < allMovies.length; i++) {
        const movie = allMovies[i];
        try {
            for (let j = 0; j < movie.genres.length; j++) {
                if (movie.genres[j].toLowerCase() == genre && isDescriptionContains(keyWord, movie.overview)) {
                    movies.push(movie)
                }
            }
        } catch (TypeError) {}
    }

    // Get the latest movies from movies array
    let latestMovie = getLatestMovie(movies)

    // Download image if user wants to
    if (imgToSave != false) {
        img.saveImg(imgToSave, latestMovie.poster, latestMovie.title)
        img.createJSONfile(latestMovie, imgToSave)
    }

    try {
        console.log(`\nLe film le plus récent dans le genre ${genre} contenant le mot clé '${keyWord}' dans sa description est '${latestMovie.title}', sorti en ${getYear(latestMovie.release_date)}`);
    } catch (TypeError) {
        console.log(`\nAucun film n'a été trouvé dans le genre ${genre} contenant le mot clé '${keyWord}' dans sa description`);
    }
}

function isDescriptionContains(word, overview) {
    let description = overview.split(' ')

    for (let i = 0; i < description.length; i++) {
        if (description[i].toLowerCase() == word) {
            return true
        }
    }
    return false
}

function getLatestMovie(movies) {
    let latestMovie = movies[0]
    for (let i = 0; i < movies.length; i++) {
        const movieReleaseDate = movies[i].release_date;
        if (movieReleaseDate > latestMovie.release_date) {
            latestMovie = movies[i]
        }
    }
    return latestMovie
}

function getYear(time) {
    let date = new Date(time * 1000)
    return date.getFullYear()
}