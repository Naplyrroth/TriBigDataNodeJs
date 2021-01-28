const fs = require('fs')

module.exports = {
    searchKeyWord: (file, keyWord, genre) => {
        // Get the data of the file
        let readFile = fs.readFileSync(file)
        let movies = JSON.parse(readFile)

        for (let i = 0; i < movies.length; i++) {
            const movie = movies[i];
            try {
                for (let j = 0; j < movie.genres.length; j++) {
                    if (movie.genres[j].toLowerCase() == genre && isDescriptionContains(keyWord, movie.overview)) {
                        console.log(movie.title);
                    }
                }
            } catch (TypeError) {}
        }
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