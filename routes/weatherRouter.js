const rp = require('request-promise');
const weatherRouter = function(app){
	app.get('/weather/:city', function(request, resp){
		console.log(request.params.city);
		var options = {
			method: "GET",
			uri: "http://samples.openweathermap.org/data/2.5/weather",
			qs: {
		      q: request.params.city,
		     appid: 'b1b15e88fa797225412429c1c50c122a1'
		         // Use your accuweather API key here
		    },
    		json: true
		}

		rp(options)
		.then((data)=>{
			data.main.cels_temp = Math.round(data.main.temp_min - 273)
			resp.render("cityweather", data);
		})
		.catch((err)=>{
			resp.status(404).send("City "+request.params.city+" was not found");
		})
	});
}
module.exports = exports = weatherRouter;