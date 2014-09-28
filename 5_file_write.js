var fs = require('fs');
fs.writeFileSync('file_sync.txt', 'Byte&Code Rules!!');
console.log('The \'File file_sync.txt\' is saved!');

var message = 'Hello Byte&Code!';
fs.writeFile('file_async.txt', message, function (error) {
	if (error) throw error;
	console.log('The \'File file_async.txt\' is saved!');
});

message = new Date().toISOString() + ' > Byte&Code Developing Great Ideas!';
fs.appendFile('file.log', '\n' + message, function (err) {
	if (err) throw err;
	console.log('The \'' + message + '\' was appended to file file.log!');
});