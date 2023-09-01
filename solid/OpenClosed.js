// Open / Closed Principle
// Open for extension, closed for modification.

// Bad
// var iceCreamFlavors = ['chocolate', 'vanilla'];
// var iceCreamMaker = {
//     makeIceCream(flavor) {
//         if (iceCreamFlavors.indexOf(flavor) > -1) {
//             console.log('Great success. You now have ice cream.');
//         } else {
//             console.log('Epic fail. No ice cream for you.');
//         }
//     }
// }
// export default iceCreamMaker;


// Good
var iceCreamFlavors = ['chocolate', 'vanilla'];
var iceCreamMaker = {
    makeIceCream(flavor) {
        if (iceCreamFlavors.indexOf(flavor) > -1) {
            console.log(`Great success. You now have ${flavor} ice cream.`);
        } else {
            console.log('Epic fail. No ice cream for you.');
        }
    },
    addFlavor(flavor) {
        iceCreamFlavors.push(flavor);
    }
}

// export default iceCreamMaker;

// Usage
iceCreamMaker.addFlavor('strawberry');
iceCreamMaker.makeIceCream('strawberry');
