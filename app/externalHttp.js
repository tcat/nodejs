const request = require('request-promise');

const options = {
	method: "GET",
	url: "http://androiddocs.ru/api/friends.json"
}

request(options)  
  .then(function (response) {
    console.log(response);
  })
  .catch(function (err) {
    console.log(err);
  })