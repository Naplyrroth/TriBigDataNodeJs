const { log } = require('console')
const fs= require('fs')
const request= require('request')

module.exports = {
    saveImg: (folderPath, moviePoster, movieName) => {

        let download = function(url, filename, folderPath) {
            request.head(url, function(err, res, body){
                request(url).pipe(fs.createWriteStream(folderPath + '/' + filename))
            })
        }
        
        let url = moviePoster
        // Prevent the 'slash error' of the movie name
        let name = movieName.replace('/', ' ')
        let filename = `${name}.jpg`
        
        download(url, filename, folderPath)
    },
    createJSONfile: (movies, folderPath) => {
        fs.writeFileSync(`${folderPath}/moviesDownloaded.json`, JSON.stringify(movies, null, '\t'))
    }
}


