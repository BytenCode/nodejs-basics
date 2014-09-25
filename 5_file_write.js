var fs = require('fs');
fs.writeFileSync('5_temp_file_sync.txt', 'Byte&Code Rules!!');
console.log('The \'File 5_temp_file_sync.txt\' is saved!');

var message = 'Hello Byte&Code!';
fs.writeFile('5_temp_file_async.txt', message, function (error) {
	if (error) throw error;
	console.log('The \'File 5_temp_file_async.txt\' is saved!');
});

message = new Date().toISOString() + ' > ' + message;
fs.appendFile('5_temp_append_file.txt', '\n' + message, function (err) {
	if (err) throw err;
	console.log('The \'' + message + '\' was appended to file 5_temp_append_file.txt!');
});