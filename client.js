var fs = require('fs')
var stream = require('twstream')

//path to password file
fs.readFile('./secret.txt','utf8',function(e,d){	
	var secret = d.slice(0,d.length - 1)
	stream.init('username',secret)
	var keywords = ['google','facebook','twitter','instagram']
	stream.request(keywords, function(res){
		var data = res.toString() //Buffer->String
		var json_obj = JSON.parse(data) //String->JSON
		console.log(json_obj.text) //Output tweets
	})
})

