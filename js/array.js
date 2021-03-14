document.write("<H1>This is Example for Array</H1>");

//Example 1
document.write("<H2>Example 1</H2>");

var array_name = [];

//            0     1       2       3
var cars = ["BMW", "Audi", "Honda", "Toyota"];

document.write("<h3>" + cars + "</h3>");
document.write("<h3>" + cars[2] + "</h3>");

//Example 2
document.write("<H2>Example 2</H2>");

// This way may usually don't use.
var array_Name = new Array();

var arr = new Array(5);
arr[0] = 0;
arr[1] = "Num1";
arr[2] = 2;
arr[3] = true;
arr[4] = false;

for (var x = 0; x < arr.length; x++) {
    document.write("<h3>" + arr[x] + "</h3>");
}

//Example 3
document.write("<H2>Example 3</H2>");

var arr1 = new Array("Apple", "Mango", "Banana");

arr1.push("Tomato");
arr1.push("Graip");

for (var x = 0; x < arr1.length; x++) {
    document.write("<h3>" + arr1[x] + "</h3>");
}