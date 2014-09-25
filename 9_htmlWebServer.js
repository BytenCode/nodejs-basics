var http = require('http');
var fs = require('fs');

var serverText = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
  	res.end('Byte&Code Rules!!');
});
serverText.listen(8888);

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
	var filename = req.url == '/' ? 'bytencode.html' : req.url.substring(1); // remove first char
	
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