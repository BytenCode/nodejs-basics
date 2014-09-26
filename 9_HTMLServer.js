var http = require('http');
var fs = require('fs');
var url = require("url"); 
var util = require('util');
var mymodule = require("./4_custom_module.js");

var serverText = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
  	res.end('Byte&Code Rules!!');
});
serverText.listen(8888);

var serverText = http.createServer(function (req, res) {
	var params = url.parse(req.url, true).query;
	var output;

	if(Object.keys(params).length != 3) 
		output = "Invalid number of parameters!";
	else {
		var num1 = parseInt(params['num1']);
		var operator = params['operator'];		
		var num2 = parseInt(params['num2']);
		var result = mymodule.calculate(num1, operator, num2);		
		output = util.format('%d %s %d = %d', num1, operator, num2, result);
	}

	res.writeHead(200, {'Content-Type': 'text/plain'});
  	res.end(output);
});
serverText.listen(6666);


var serverFile = http.createServer(function (req, res) {
 	fs.readFile("bytencode.png", "binary", function(error, fileContent) {
      	if(error) {        
			res.writeHead(500, {"Content-Type": "text/plain"});
			res.write(error);
			res.end();
			return;
		}
		res.writeHead(200);
		res.write(fileContent, "binary");
		res.end();
    });
});
serverFile.listen(9999);

var staticSite = http.createServer(function(req, res) { 
	var filename = req.url == '/' ? 'bytencode.html' : req.url.substring(1); 
	console.log("File Request: " + filename);
	fs.readFile(filename, "binary", function(error, fileContent) {
		if(error) {        
			res.writeHead(404, {"Content-Type": "text/plain"});			
			res.end('404 Not Found');
			return;
		}
		res.writeHead(200);
		res.write(fileContent, "binary");
		res.end();
	});			
});
staticSite.listen(7777);

console.log("END");