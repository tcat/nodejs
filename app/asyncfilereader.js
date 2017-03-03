const fs = require("fs");
console.log('start reading a file...')
var getDataHandler= (err, content)=>{
	if (err) return console.log(err);
	return console.log(content);
}
fs.readFile("README.md" , "utf-8", getDataHandler);

console.log('end of the file')  