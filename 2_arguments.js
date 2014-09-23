
console.log('\nNumber of parameters: ' + process.argv.length + '\n');

process.argv.forEach(function(value, index) {
	console.log('Parameter [' + index + ']: ' + value);
});