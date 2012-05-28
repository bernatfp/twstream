var https = require('https')

var Twstream = {}

Twstream.options = {
  host: 'stream.twitter.com',
  path: '/1/statuses/filter.json',
  port: 443,
  method: 'POST',
  auth: '',
  headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': ''
      }
}

//Populates the authentication field with the username & password fields
Twstream.init = function(user,pass){
  this.options.auth = user + ':' + pass
}

//Receives an array of words and a callback which will be passed the stream
Twstream.request = function(wordlist,cb){
  if (this.options.auth.length === 0) throw Error('You have not called Twstream.init()')
  var words = wordlist.join(',')
  this.options.headers['Content-Length'] = words.length
  var req = https.request(this.options,function(res){
    res.on('data', function(data) {
      cb(data)
    })
  })
  req.write('track=' + words)
  req.end()
}

module.exports.options = Twstream.options
module.exports.init = Twstream.init
module.exports.request = Twstream.request
