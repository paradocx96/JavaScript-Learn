document.write("<H1>This is Example for WHILE-LOOP statement</H1>");

//Example 1
document.write("<H2>Example 1</H2>");

var x = 0;
while (x < 10) {
    document.write("<h3>" + x + "</h3>");
    x = x + 2;
}

document.write("<H1>This is Example for DO-WHILE-LOOP statement</H1>");

//Example 1
document.write("<H2>Example 1</H2>");

var y = 0;
do {
    document.write("<h3>Number is " + y + "</h3>");
    y++;
} while (y < 5);

//Example 2
document.write("<H2>Example 2</H2>");

var z = 10;
do {
    document.write("<h3>Number is " + z + "</h3>");
    z--;
} while (z > 5);