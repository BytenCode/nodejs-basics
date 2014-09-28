var fs = require('fs');

fs.readFile('file_async.txt', function (err, content) {
  	if (err) throw err;
  	console.log('File Content [file_async.txt]:\n' + content + '\n');
});

var fileContent = fs.readFileSync('file_sync.txt');
console.log('File Content [file_sync.txt]:\n' + fileContent + '\n');

