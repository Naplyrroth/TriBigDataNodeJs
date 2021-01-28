const fs = require('fs')

module.exports = (file, keyWord, genre) => {
    // Get the data of the file
    let readFile = fs.readFileSync(file)
    let allMovies = JSON.parse(readFile)
    let movies = []
    
    for (let i = 0; i < allMovies.length; i++) {
        const movie = allMovies[i];
        try {
            for (let j = 0; j < movie.genres.length; j++) {
                if (movie.genres[j].toLowerCase() == genre && isDescriptionContains(keyWord, movie.overview)) {
                    let obj = {
                        "title": movie.title,
                        "release_date": movie.release_date
                    }
                    
                    movies.push(obj)
                }
            }
        } catch (TypeError) {}
    }

    try {
        console.log(`\nLe film le plus récent dans le genre ${genre} contenant le mot clé '${keyWord}' dans sa description est '${getLatestMovie(movies)}'`);
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
    return latestMovie.title
}