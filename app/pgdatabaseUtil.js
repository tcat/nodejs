'use strict';
const pg = require("pg");

const conString = 'postgres://postgres:root1@localhost/nodejs';


function connectToDb(callback){
	pg.connect(conString, function(err, client, done){
		callback(err, client, done);
	});
}
function executeQuery(client, query, data, callback){
	client.query(query, data, function(err, result){
		callback(err, result);
	});
}
function saveUserToDb(user, callback){
	connectToDb((err, client, done)=>{
		if (err) {
			return console.error('error fetching client', err);
		}

		executeQuery(client, 'INSERT INTO users (name, role) VALUES ($1, $2);', [user.name, user.role], (err, result)=>{
			done();
			callback(err, result);
		});
		
	});
}
function getUsersFromDb(callback){
	console.log('getUsersFromDb funct')
	connectToDb((err, client, done)=>{
		if (err) {
			return console.error('error fetching client', err);
		}
		executeQuery(client, 'SELECT name, role FROM users;', [], (err, result)=>{
			done();
			callback(err, result);
			console.log(result.rows)
		});
		
	});
}

module.exports.saveUserToDb = saveUserToDb;
module.exports.getUsersFromDb = getUsersFromDb;