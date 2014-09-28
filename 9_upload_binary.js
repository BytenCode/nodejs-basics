var http = require('http');
var fs = require('fs')

var server = http.createServer(function (req, res) {
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
server.listen(8888);