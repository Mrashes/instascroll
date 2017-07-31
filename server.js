const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const img = require('./attr.js')
const scrape = require('./app.js')
// const request = require('request');
// const moment = require('moment');
// const request = require('request')


var port = process.env.PORT || 3000

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res){
	res.render('index', {imgurl: null, error: null});
})

app.post('/', function (req, res) {
    // img(req, res);
    scrape(req, res);
})

app.listen(port, function () {
	console.log('Example app listening on port ' + port + '!');
})