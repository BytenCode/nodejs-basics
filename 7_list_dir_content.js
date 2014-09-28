var fs = require('fs');

fs.readdir(process.argv[2], function (error, dirContent) {
	dirContent.forEach(function (file) {
		console.log(file);
	});
});	