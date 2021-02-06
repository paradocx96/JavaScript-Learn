document.write("<H1>This is Example for Operators</H1>");

//Addition
var a = 3; //right to left
var b = 8;
var c = 6;

var result = a + b;
var result2 = "Result " + a + b;
var result3 = c + b + "Result " + a + b;
var result4 = a + b * c;
var result5 = (a + b) * c;

document.write("<H3>Result for Addition is " + result + "</H3>");
document.write("<H3>Result for Addition is " + result2 + "</H3>");
document.write("<H3>Result for Addition is " + result3 + "</H3>");
document.write("<H3>Result for Addition is " + result4 + "</H3>");
document.write("<H3>Result for Addition is " + result5 + "</H3>");