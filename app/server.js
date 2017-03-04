const http = require('http');
const asyncReadFiles = require('./asyncReadFiles.js');
const port = 3000;

function reqHandler(req, resp){
	console.log(req.url);
	asyncReadFiles.getFile('./views/main.html', function(responseData){
		console.log(responseData);
		resp.end(responseData);
	});

}

var server = http.createServer(reqHandler);

server.listen(port, function(err){
	if (err){
		return console.log('Error - ', err);
	}
	console.log('server is listening on port '+ port);
})