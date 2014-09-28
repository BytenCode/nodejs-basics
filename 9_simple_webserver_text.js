var http = require('http');
var server = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
  	res.end('Byte&Code Rules!!');
});
server.listen(8888);