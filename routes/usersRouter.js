const users = [];
const fileUtils = require('../app/fileUtils.js');
const pgdatabaseUtil = require('../app/pgdatabaseUtil.js');
const usersRouter = function(app){
	app.post('/api/users', function(request, resp){
		var req = request.body;
		if (req && req.name && req.role) {
			var user = {name: req.name, role: req.role};
			if (req.saveToFile){
				fileUtils.appendToFile('./storage/logs.txt', user, (status, msg)=>{
					resp.status(status).json(msg);
				});
			} else if (req.saveToPgDatabase){
				pgdatabaseUtil.saveUserToDb(user, (err, data)=>{
					console.log(err);
					if (err) {
				      resp.status(400).send(err);
				    	return
				    }
				    resp.json(user);
				})
			} else {
				//Save to memory
				users.push(user);
				resp.json(user);
			}
		} else {
			resp.status(400).send('Data is not valid!');
		}
	});

	app.get('/api/users', function(request, resp){
		console.log('get users', users);
		if (users.length){
			resp.json(users);
		} else {
			console.log('get users from db')
			pgdatabaseUtil.getUsersFromDb((err, data)=>{
				console.log(err, data)
				if (err) {
			      resp.status(400).send(err);
			    	return
			    }
			    resp.json(data.rows);
			})
		} 
	});
}
module.exports = exports = usersRouter;