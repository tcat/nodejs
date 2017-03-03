const _ = require('lodash');

var sum = function(a,b){
	if (a == 0) return b;
	if (b == 0) return a;
	return a+b;
};
var mergeArr =(objArr)=>{
	var res = {};
	objArr.forEach((obj)=>{
		res = _.assign(res, obj);	
	});
	return res;
};


module.exports.sum = sum;
module.exports.mergeArr = mergeArr;