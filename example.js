var stream = require('./twstream')

stream.init('user','pass')

var keywords = []

stream.request(keywords, function(d){
	process.stdout.write(d)
})