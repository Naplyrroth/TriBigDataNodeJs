module.exports = {
    saveImg: (folderPath) => {
        console.log('Save image function');
        console.log(`Folder path: ${folderPath}`)
    }
}
const fs= require('fs')
const request= require('request')

const download = (url, path, callback) => {
    request.head(url, (err, res, body) => {
        request(url)
        .pipe(fs.createWriteStream(path))
        .on('close', callback)
    })
}
const url = 'https://image.tmdb.org/t/p/w500/f1IFS23zAXRUsRa35JuEuLHZtSV.jpg'
const path= 'G:\TriBigDataNodeJs\Img'
download(url, path, () => {
    console.log('Done!')
})



