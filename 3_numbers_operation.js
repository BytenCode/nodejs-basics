
if(process.argv.length != 5) {
	console.log("Invalid number of parameters!");
	process.exit();
}

var num1 = parseInt(process.argv[2]);
var operator = process.argv[3];
var num2 = parseInt(process.argv[4]);
var result;

switch(operator){
	case "+": result = num1 + num2; break;
	case "-": result = num1 - num2; break;	 
	case "x": result = num1 * num2; break;
	case ":": result = num1 / num2; break;
	default:
		console.log("Invalid operator!");
		process.exit();		
}

console.log( num1 + ' ' + operator + ' ' + num2 + ' = ' + result );