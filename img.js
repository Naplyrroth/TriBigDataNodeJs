module.exports = {
    saveImg: (folderPath) => {
        //Creating the functionto download the image
        let download = function(url, filename, folderPath, callback){
            request.head(url, function(err, res, body){
                console.log('content-type:', res.headers['content-type'])
                console.log('content-length:', res.headers['content-length'])
                //Getting the foler name an image name to download it in the right folder
                request(url).pipe(fs.createWriteStream(folderPath + '/' + filename)).on('close', callback)
            })
        }

        let url = 'https://image.tmdb.org/t/p/w500/reNPMjkPg9f6wgf6kHSSkKjBarL.jpg'
        let filename = 'Dragon Ball GT poster' + '.jpg'
          
        download(url, filename, folderPath, function(){
            console.log('done')
        })

    }
}
const fs= require('fs')
const request= require('request')

