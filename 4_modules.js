var mymodule = require("./number_operation_md.js");

if(process.argv.length != 5) {
	console.log("Invalid number of parameters!");
	process.exit();
}

var num1 = parseInt(process.argv[2]);
var operator = process.argv[3];
var num2 = parseInt(process.argv[4]);

var result = mymodule.calculate(num1, operator, num2);
mymodule.print(num1, operator, num2, result);