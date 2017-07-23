//Show User Media from Instagram - https://www.instagram.com/{Username}/media/
  //where I found the user media link - https://github.com/rarcega/instagram-scraper-node

const request = require('request')
let query = 'chicago'
let url = `https://www.instagram.com/explore/tags/${query}/?__a=1`

//This request searches for the url which returns a json file in a string  I need to figure out how to feed it to a site
function scrape() {
  return new Promise (
    function(resolve, reject) {
      request(url, function (err, response, body) {
              if(err){
                reject('there was a problem with the API call : '+ err)

              }
              else {
                let json = JSON.parse(body, 2)
                let imgURL = [];
                for (i=0; i<json.tag.media.nodes.length; i++) {
                  imgURL.push(json.tag.media.nodes[i].display_src)
                }
                // console.log(imgURL)
                resolve(imgURL)
                
                // tag.media.nodes[i].display_src
              }
            });
    }
  )
}

scrape().then(function(results){
  //successfuly flows into an array
  console.log(results)
})