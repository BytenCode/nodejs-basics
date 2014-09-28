var http = require('http');
var fs = require('fs');

var request = http.get("http://www.bytencode.com/img/cube_big.png", function(response){
	response.setEncoding('binary')
    var binaryBuffer = '';
    response.on('data', function(chunk){
        binaryBuffer += chunk
    });
    response.on('end', function(){
        fs.writeFile('bytencode.png', binaryBuffer, 'binary', function(err){
            if (err) throw err
            console.log('File bytencode.png saved.')
        });
    });
});
