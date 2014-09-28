var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;

mongoClient.connect("mongodb://localhost:27017/bytencodeDb", function(err, db) {
	if(err) 
		return console.dir(err);	
	
	var collectionUser = db.collection('user');

	var user1 = { name: 'David', Age: 35, createDate: new Date().toISOString()};
	var user2 = { name: 'John', Age: 31, email: 'john@test.com', createDate: new Date().toISOString() };
	var user3 = { name: 'Franklin', Age: 39, phone: '+351 1112223333', createDate: new Date().toISOString() };

	var funcAddUser = function(err, user) {
		console.log('User added successfully: ' + JSON.stringify(user));
	};

	collectionUser.insert(user1, funcAddUser);
	collectionUser.insert(user2, funcAddUser);
	collectionUser.insert(user3, funcAddUser);

	collectionUser.find().toArray(function(err, users) {        
        users.forEach(function(user) {
        	console.log(user.name + ' - ' + user.createDate);	
        });        
    });
	
});
