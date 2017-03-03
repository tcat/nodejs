const data = require("./data.js");
const calc = require("./calc.js");
require("./asyncfilereader.js");
console.log("------------------------");

const sum = calc.sum(data.dataArr[0], data.dataArr[1]);
console.log('The result is: '+sum);
console.log(calc.mergeArr([{a:2}, {b:5}, {c:7}]));
console.log("------------------------");

