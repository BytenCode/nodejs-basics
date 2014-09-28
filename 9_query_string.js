var http = require('http');
var url = require("url"); 
var util = require('util');
var mymodule = require("./number_operation_md.js");

var server = http.createServer(function (req, res) {
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
server.listen(8888);