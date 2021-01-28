const fs= require('fs')
const request= require('request')

module.exports = {
    saveImg: (folderPath) => {

        let url = 'https://image.tmdb.org/t/p/w500/reNPMjkPg9f6wgf6kHSSkKjBarL.jpg'
        let filename = 'Dragon Ball GT poster.jpg'
          
        download(url, filename, function(){
            console.log('done')
        })

        let download = function(url, filename, callback){
            request.head(url, function(err, res, body){
                console.log('content-type:', res.headers['content-type'])
                console.log('content-length:', res.headers['content-length'])
          
                request(url).pipe(fs.createWriteStream(filename)).on('close', callback)
            })
        }
    }
}

