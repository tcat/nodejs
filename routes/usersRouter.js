const users = [];
const usersRouter = function(app){
	app.post('/api/users', function(request, resp){
		var req = request.body;
		if (req && req.name && req.role) {
			var user = {name: req.name, role: req.role};
			users.push(user);
			resp.json(user);
		} else {
			resp.status(400).send('Data is not valid!');
		}
	});
}
module.exports = exports = usersRouter;