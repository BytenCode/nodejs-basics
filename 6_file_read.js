var fs = require('fs');

var fileContent = fs.readFileSync('5_temp_file_sync.txt', 'utf8');
console.log(fileContent);

fs.readFile('5_temp_file_async.txt', 'utf8', function (err, content) {
  	if (err) throw err;
  	console.log(content);
});