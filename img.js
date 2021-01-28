const fs= require('fs')
const request= require('request')

module.exports = {
    saveImg: (folderPath) => {
        console.log('Save image function');
        console.log(`Folder path: ${folderPath}`)
    }
}

const download = (url, path, callback) => {
    request.head(url, (err, res, body) => {
        request(url)
        .pipe(fs.createWriteStream(path))
        .on('close', callback)
    })
}
const url = 'https://image.tmdb.org/t/p/w500/reNPMjkPg9f6wgf6kHSSkKjBarL.jpg'
const path= './img'
download(url, path, () => {
    console.log('Done!')
})