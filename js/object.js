document.write("<H1>This is Example for OBJECT in JavaScript</H1>");

//Method 1
document.write("<H2>Method 1</H2>");

var Car = {

    // Properties
    car_brand: "Tesla",
    car_model: "Model 1",
    car_price: 30000,

    //Methods
    displayModelAndPrice: function() {
        document.write("<h3>Model : " + this.car_model + ", Price is " + this.car_price + ".</h3>");
    },

    carActivity: function() {
        return "This is for testing objects in JavaScript";
    }
}

document.write("<h3>Car Brand : " + Car.car_brand + "</h3>");
document.write("<h3>Car Model : " + Car.car_model + "</h3>");
document.write("<h3>Car Price : " + Car.car_price + "</h3>");

Car.displayModelAndPrice();

document.write("<h3>" + Car.carActivity() + "</h3>");

//Method 2
document.write("<H2>Method 2</H2>");

function Cars(car_name, car_model, car_price) {
    this.car_name = car_name;
    this.car_model = car_model;
    this.car_price = car_price;

    this.displayCar = function() {
        document.write("<h3>Car name : " + this.car_name + "</h3>");
        document.write("<h3>Car model : " + this.car_model + "</h3>");
        document.write("<h3>Car price : " + this.car_price + "</h3>");
    }

    this.car_check = function() {
        return "This is type two object creation.";
    }
}

var c1 = new Cars("Honda", "Civic", 250000);
var c2 = new Cars("Toyota", "Vitz", 350000);

c1.displayCar();
document.write("<h3>" + c1.car_check() + "<h3>");
c2.displayCar();