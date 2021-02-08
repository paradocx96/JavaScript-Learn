document.write("<H1>This is Example for Scope of Variable</H1>");

//Example 1

var x = 1; // Global variable

function addNumber() {
    var y = 10; // Local variable

    // Below variable is Global variable. we can define global variable without var keyword.
    // Also we can access this outside the function. But some web browsers not support without var keyword.
    // var1 = "Example";

    document.write("<h3>Total is " + (x + y) + "</h3>");

    document.write("<h3>Global variable x value is " + x + "</h3>");
    document.write("<h3>Local variable y value is " + y + "</h3>");
}

addNumber(); // function call

document.write("<h3>Global variable x value is " + x + "</h3>");

// document.write("<h3>Global variable var1 value is " + var1 + "</h3>");