/* module.exports = {
    saveImg: (folderPath) => {
        console.log('Save image function');
        console.log(`Folder path: ${folderPath}`)
    }
}
const fs= require('fs')
const request= require('request')

constdownload = (url, path, callback) => {
    request.head(url, (err, res, body) => {
        request(url)
        .pipe(fs.createWriteStream(path))
        .on('close', callback)
    })
}
consturl = 'https://image.tmdb.org/t/p/w500/reNPMjkPg9f6wgf6kHSSkKjBarL.jpg'
constpath= 'G:\TriBigDataNodeJs\Img'
download(url, path, () => {
    console.log('Done!')
})




var http = require('http')
  , options

options = {
    host: 'www.google.com'
  , port: 80
  , path: '/images/logos/ps_logo2.png'
}

var request = http.get(options, function(res){
    var imagedata = ''
    res.setEncoding('binary')

    res.on('data', function(chunk){
        imagedata += chunk
    })

    res.on('end', function(){
        fs.writeFile('logo.png', imagedata, 'binary', function(err){
            if (err) throw err
            console.log('File saved.')
        })
    })
}) */