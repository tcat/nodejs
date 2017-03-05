fs = require("fs");


function appendToFile(fileName, data, callback){
	var dataObj = {};
	for (dataKey in data){
		dataObj[dataKey] = data[dataKey];
	} 
	fs.appendFile(fileName, JSON.stringify(dataObj), (err)=>{
		if (err) {
			callback(500, "Can't save to file "+fileName);
			return;
		}
		callback(200, "Saved to "+fileName);
		return;
	});
}
module.exports.appendToFile = appendToFile;