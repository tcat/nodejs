var async = require('async');
var fs = require('fs');

function getFile(fileToRead, callback){
	fs.readFile(fileToRead, (err, data) => {
	  	callback(data);
	});
}

module.exports.getFile = getFile;