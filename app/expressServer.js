const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const asyncReadFiles = require('./asyncReadFiles.js');
const port = 3000;




app.engine('.hbs', exphbs({
	defaultLayout: 'main',
	extname: '.hbs',
	layoutsDir: path.join(__dirname, '../views/layout'),
	partialsDir: path.join(__dirname, '../views/partials')
}))
app.set('view engine', '.hbs');
app.set('engine', path.join(__dirname, 'views'))
app.get('/', function(req, resp){
	
		resp.render("home", resp);

});

app.get('/error', function(req, resp){
		throw new Error('Error')
});


app.listen(port, function(err){
	if (err) {
		return console.log("Can't run server");
	}
	return console.log("Server is running on port ", port);
})

app.use(function(err, req, resp, next){
	if (err){
		console.log(err)
  		resp.status(500).send('Something broke!');
  	}
})