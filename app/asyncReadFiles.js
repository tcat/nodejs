var async = require('async');
var fs = require('fs');

function getFile(fileToRead, callback){
	fs.readFile(fileToRead, (err, data) => {
		console.log('resp is done here ', err,data);
	  	callback(data);
	});
}

module.exports.getFile = getFile;