document.write("<H1>This is Example for SWITCH statement</H1>");

//Example 1

var day = 2;

switch (day) {

    case 1:
        document.write("<H2>Monday</H2>");
        break;
    case 2:
        document.write("<H2>Tuesday</H2>");
        break;
    case 3:
        document.write("<H2>Wednesday</H2>");
        break;
    case 4:
        document.write("<H2>Thursday</H2>");
        break;
    case 5:
        document.write("<H2>Fidday</H2>");
        break;
    case 6:
        document.write("<H2>Saturday</H2>");
        break;
    case 7:
        document.write("<H2>Sunday</H2>");
        break;
    default:
        document.write("<H2>INVALID DAY</H2>");
}


//Example 2

var value = "day3";

switch (value) {

    case "day1":
        document.write("<H2>Monday</H2>");
        break;
    case "day2":
        document.write("<H2>Tuesday</H2>");
        break;
    case "day3":
        document.write("<H2>Wednesday</H2>");
        break;
    case "day4":
        document.write("<H2>Thursday</H2>");
        break;
    case "day5":
        document.write("<H2>Fidday</H2>");
        break;
    case "day6":
        document.write("<H2>Saturday</H2>");
        break;
    case "day7":
        document.write("<H2>Sunday</H2>");
        break;
    default:
        document.write("<H2>INVALID DAY</H2>");
}