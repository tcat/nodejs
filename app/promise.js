var fs =require('fs');
var filesToRead = ['README.md', 'index.js', '.gitignore'];
var functArr = [];
var readFile = function(file){
	return new Promise(function(resolve, reject){
		fs.readFile(file, function(err, data){
			if (err) reject(err);
			resolve(data);
		});
	})
}

filesToRead.forEach(function(file){
	functArr.push(readFile(file));
});

Promise.all(functArr)
.then(function(data){
	console.log('All task were done - ', data);
})
.catch(function(err){
	console.log('Error - ', err);
});