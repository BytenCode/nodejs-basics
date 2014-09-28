
console.log('\nNumber of arguments: ' + process.argv.length + '\n');

process.argv.forEach(function(value, index) {
	console.log('Argument [' + index + ']: ' + value);
});