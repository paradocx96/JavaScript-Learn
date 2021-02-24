//Ex1

/*
setTimeout(
    function (){
        console.log("");
    }
)

function value() {
    let val = 0;
    setTimeout();
}

setTimeout(function (){
    console.log("Value")
},1000);
*/

function getValue(callback) {
    let value = 0;

    setTimeout(
        function () {
            value = 10;
            callback(value);
        },2000
    );
    return value;
}

console.log(getValue(function (val){
    console.log("Callback function " + val);
}));


