const scrape = require('./app.js')


function img(req, res) {
    scrape(req, res).then(function(results){
        
        res.render('index');
    })
}


module.exports = img;