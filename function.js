document.write("<H1>This is Example for FUNCTION</H1>");

//Example 1
document.write("<H2>Example 1</H2>");

function addNumber() {
    var x = 3;
    var y = 5;
    var total = x + y;
    document.write("<h3>Total is " + total + "</h3>");
}

addNumber();

//Example 2
document.write("<H2>Example 2</H2>");

function addTwoNumber(x, y) {
    var total = x + y;
    document.write("<h3>Total is " + total + "</h3>");
}

addTwoNumber(6, 7);

//Example 3
document.write("<H2>Example 3</H2>");

function addTwoNumberReturn(x, y) {
    var total = x + y;
    return total;
}

var output = addTwoNumberReturn(2, 8);
document.write("<h3>Total is " + output + "</h3>");