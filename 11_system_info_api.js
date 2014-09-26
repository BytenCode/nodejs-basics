var http = require('http');
var os = require('os');

function getSystemInfo(){
	return  {
		tmpdir: os.tmpdir(),
		endianness: os.endianness(),
		hostname: os.hostname(),
		type: os.type(),
		platform: os.platform(),
		arch: os.arch(),
		release: os.release(),
		uptime: os.uptime(),
		loadavg: os.loadavg(),
		totalmem: os.totalmem(),
		freemem: os.freemem(),
		cpus: os.cpus(),
		networkInterfaces: os.networkInterfaces(),
		EOL: os.EOL
	};
}

function getDate(){
	var date = new Date();
	return {
		date: date.toISOString()
	};
}

var server = http.createServer(function (req, res) {
	var content;
	if (/^\/api\/system/.test(req.url))
    	content = getSystemInfo();
    else if (/^\/api\/date/.test(req.url))
		content = getDate();

    if(content) {
    	res.writeHead(200, { 'Content-Type': 'application/json' })
    	res.end(JSON.stringify(content))
    }
    else {
    	res.writeHead(404, {"Content-Type": "text/plain"});			
		res.end('404 Not Found');
    }  
});
server.listen(8888);