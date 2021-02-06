document.write("<H1>This is Example for FOR-LOOP statement</H1>");

/* 
 * for (init; Condition; increment / decrement) {
 *   document.write();
 * } 
 */

//Example 1
document.write("<H2>Example 1</H2>");

for (var index = 0; index < 5; index++) {
    document.write("<H3>Number is " + index + "</H3>");
}

//Example 2
document.write("<H2>Example 2</H2>");

for (var x = 1; x <= 10; x++) {
    document.write("<H4>5 x " + x + " = " + 5 * x + "</H4>");
}

//Example 3
document.write("<H2>Example 3</H2>");

for (var y = 2; y <= 10; y += 2) {
    document.write("<H4>" + y + "</H4>");
}

//Example 4
document.write("<H2>Example 4</H2>");

for (var z = 0; z < 10; z++) {
    document.write("<H4>" + z + "</H4>");
}