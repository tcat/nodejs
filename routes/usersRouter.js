const users = [];
const fileUtils = require('../app/fileUtils.js');

const usersRouter = function(app){
	app.post('/api/users', function(request, resp){
		var req = request.body;
		if (req && req.name && req.role) {
			var user = {name: req.name, role: req.role};
			if (req.saveToFile){
				fileUtils.appendToFile('./storage/logs.txt', user, (status, msg)=>{
					resp.status(status).json(msg);
				});
			} else {
				//Save to memory
				users.push(user);
				resp.json(user);
			}
		} else {
			resp.status(400).send('Data is not valid!');
		}
	});
}
module.exports = exports = usersRouter;