//Show User Media from Instagram - https://www.instagram.com/{Username}/media/
  //where I found the user media link - https://github.com/rarcega/instagram-scraper-node

const request = require('request')
let query = 'chicago'
let url = `https://www.instagram.com/explore/tags/${query}/?__a=1`

//This request searches for the url which returns a json file in a string  I need to figure out how to feed it to a site
function scrape(req, res) {
  return new Promise (
    function(resolve, reject) {
      let query = req.body.tag;
      // console.log(query)
      let url = `https://www.instagram.com/explore/tags/${query}/?__a=1`
      request(url, function (err, response, body) {
            if(err){
            res.render('index');
            reject(err)
            }
            else {
                let json = JSON.parse(body, 2)
                if (json.tag.top_posts.nodes[0].display_src == undefined){
                    let imgURL = [];
                    for (i=0; i<json.tag.top_posts.nodes.length; i++) {
                        imgURL.push(json.tag.top_posts.nodes[i].display_src)
                    }
                    
                    resolve(imgURL)
                }
                else{
                    let imgURL = [];
                    for (i=0; i<json.tag.media.nodes.length; i++) {
                        imgURL.push(json.tag.media.nodes[i].display_src)
                    }
                    
                    resolve(imgURL)
                }
            }
        });
    }
  )
}

module.exports = scrape;