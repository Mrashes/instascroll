const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// const request = require('request');
// const moment = require('moment');
const request = require('request')


var port = process.env.PORT || 3000

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res){
	res.render('index', {imgurl: null, error:null});
})



//This request searches for the url which returns a json file in a string  I need to figure out how to feed it to a site
function scrape(req, res) {
  return new Promise (
    function(resolve, reject) {
      let query = req.body.tag;
      let url = `https://www.instagram.com/explore/tags/${query}/?__a=1`
      request(url, function (err, response, body) {
            if(err){
            res.render('index', {imgurl: null, error: 'there was a problem with the API call : '+ err});
            reject(err)
            }
            else {
                let json = JSON.parse(body, 2)
                if (json.tag.top_posts.nodes[0].display_src == undefined){
                    let imgURL = [];
                    for (i=0; i<json.tag.top_posts.nodes.length; i++) {
                        imgURL.push(json.tag.top_posts.nodes[i].display_src)
                    }
                    res.render('index', {imgurl: imgURL, error: {null});
                    resolve()
                }
                else{
                    let imgURL = [];
                    for (i=0; i<json.tag.media.nodes.length; i++) {
                        imgURL.push(json.tag.media.nodes[i].display_src)
                    }
                    res.render('index', {imgurl: imgURL, error: null});
                    console.log(imgURL)
                    resolve()
                }
            }
        });
    }
  )
}

app.post('/', function (req, res) {
    // weatherNow(req, res)
    scrape(req, res)
})

app.listen(port, function () {
	console.log('Example app listening on port ' + port + '!');
})