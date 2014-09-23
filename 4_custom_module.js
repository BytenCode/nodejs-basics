var util = require('util')

module.exports = {

    calculate: function (number1, operator, number2) {
        var result;
        switch(operator){
            case "+": result = number1 + number2; break;
            case "-": result = number1 - number2; break;   
            case "x": result = number1 * number2; break;
            case ":": result = number1 / number2; break;
            default:
                console.log("Invalid operator!");
                process.exit();     
        }
        return result;
    },

    print: function (number1, operator, number2, result) {
        //console.log( number1 + ' ' + operator + ' ' + number2 + ' = ' + result );
        console.log(util.format('%d %s %d = %d', number1, operator, number2, result));
    }

}