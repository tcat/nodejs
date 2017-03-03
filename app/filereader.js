var fs = require ("fs");

let content;

try{
	content = fs.readFileSync("README.md", 'utf-8');

} catch (err) {
	console.log(err);
}

console.log(content);