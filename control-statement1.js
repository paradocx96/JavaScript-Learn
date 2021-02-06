document.write("<H1>This is Example for IF ELSE statement</H1>");

//Example 1

var x = 6;
var y = 5;

if (x % 2 == 0) {
    document.write("<H3>Number is EVEN. Number is " + x + "</H3>");
} else {
    document.write("<H3>Number is ODD. Number is " + x + "</H3>");
}

if (y % 2 == 0) {
    document.write("<H3>Number is EVEN. Number is " + y + "</H3>");
} else {
    document.write("<H3>Number is ODD. Number is " + y + "</H3>");
}

if (x > 0) {
    document.write("<H3>Number is positive. Number is " + x + "</H3>");
} else if (x < 0) {
    document.write("<H3>Number is negative. Number is " + x + "</H3>");
} else {
    document.write("<H3>Number is neither positive or negative. Number is " + x + "</H3>");
}


if (x > 0 && x % 2 == 0) {
    document.write("<H3>Number is POSITIVE and EVEN. Number is " + x + "</H3>");
} else if (x > 0 && x % 2 == 1) {
    document.write("<H3>Number is POSITIVE and ODD. Number is " + x + "</H3>");
} else if (x < 0 && x % 2 == 0) {
    document.write("<H3>Number is NEGATIVE and EVEN. Number is " + x + "</H3>");
} else if (x < 0 && x % 2 == 1) {
    document.write("<H3>Number is NEGATIVE and ODD. Number is " + x + "</H3>");
} else {
    document.write("<H3>Number is INVALID. Number is " + x + "</H3>");
}