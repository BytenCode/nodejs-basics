var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) { 
	var filename = req.url == '/' ? 'bytencode.html' : req.url.substring(1); 
	console.log("File Requested: " + filename);	
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
server.listen(8888);