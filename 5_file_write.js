var fs = require('fs');
fs.writeFileSync('5_temp_file_sync.txt', 'Byte&Code Rules!!');
console.log('The \'File 5_temp_file_sync.txt\' is saved!');

fs.writeFile('5_temp_file_async.txt', 'Hello Byte&Code!', function (error) {
	if (error) throw error;
	console.log('The \'File 5_temp_file_async.txt\' is saved!');
});

fs.appendFile('5_temp_append_file.txt', '\nHello Byte&Code!', function (err) {
  if (err) throw err;
  console.log('The \'Hello Byte&Code!\' was appended to file 5_temp_append_file.txt!');
});