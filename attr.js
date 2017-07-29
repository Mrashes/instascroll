const scrape = require('./app.js')

let count = 0;

function imgRotater(req, res, urlArray) {
    res.render('index', {imgurl: urlArray[count], error: null});
    if (count != urlArray.length){
        count++
        setInterval(function() { imgRotater(req, res, urlArray);}, 3000)
    }
    else {
        count = 0
        setInterval(function() { imgRotater(req, res, urlArray);}, 3000)
    }
}

function img(req, res) {
    urlArray = "";
    scrape(req, res).then(function(results){
        urlArray = results
    })
}


module.exports = img;