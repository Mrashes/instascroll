const scrape = require('./app.js')

let count = 0;

function imgRotater(req, res, urlArray) {
    res.render('index', {imgurl: urlArray[count], error: null});
}

function img(req, res) {
    urlArray = "";
    scrape(req, res).then(function(results){
        urlArray = results
    })
}


module.exports = img;