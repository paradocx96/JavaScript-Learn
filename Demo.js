// This is the comment

/* This is 
long 
Comment
 */

//src = "Demo.js"

var num = 16;
var Name = "Dilanga Lankesh";
var name = "Navinda";
var flag = false;

document.write("<P>" + num);

num = Name;

document.write("<P>" + num);
document.write("<P>" + Name);
document.write("<P>" + name);
document.write("<P>" + flag);
document.write(Name);

//alert(num);

var str = String("Example Text");
document.write("<h2>String type result is " + str + "</h2>");

var value = Number(1000);
document.write("<h2>Number type value is " + value + "</h2>");

var result = Boolean(1 > 0);
document.write("<h2>Boolean type result is " + result + "</h2>");

var result1 = Boolean(true);
var result2 = Boolean(false);
document.write(result1 == result2);

var arr = new Array(5);
arr[0] = 0;
arr[1] = "Num1";
arr[2] = 2;
arr[3] = true;
arr[4] = false;

document.write("<p>");

document.write(arr[0]);

document.write("<p>");

document.write(arr[1]);

document.write("<p>");

document.write(arr[2]);

document.write("<p>");

document.write(arr[3]);

document.write("<p>");

document.write(arr[4]);