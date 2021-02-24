//Ex4
//============================================

function taxCalculator(percentage) { // This is parent function
    return function (amount) { // This is internal function
        return amount * percentage;
    }
}

var calculator = taxCalculator(.10);
console.log(calculator(100));

// closure is an internal function accessing its parent function variables and arguments.
// This is example for encapsulation in javaScript