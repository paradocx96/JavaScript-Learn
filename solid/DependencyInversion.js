// Dependency Inversion Principle
// High-level modules should not depend on low-level modules. Both should depend on abstractions.
// Abstractions should not depend on details. Details should depend on abstractions.

// Bad
// class InventoryRequester {
//     constructor() {
//         this.REQ_METHODS = ['HTTP'];
//     }
//
//     requestItem(item) {
//         // ...
//     }
// }
//
// class InventoryTracker {
//     constructor(items) {
//         this.items = items;
//
//         // BAD: We have created a dependency on a specific request implementation.
//         // We should just have requestItems depend on a request method: `request`
//         this.requester = new InventoryRequester();
//     }
//
//     requestItems() {
//         this.items.forEach((item) => {
//             this.requester.requestItem(item);
//         });
//     }
// }
//
// const inventoryTracker = new InventoryTracker(['apples', 'bananas']);
// inventoryTracker.requestItems();

// Good
class InventoryTracker {
    constructor(items, requester) {
        this.items = items;
        this.requester = requester;
    }

    requestItems() {
        this.items.forEach((item) => {
            this.requester.requestItem(item);
        });
    }
}

class InventoryRequesterV1 {
    constructor() {
        this.REQ_METHODS = ['HTTP'];
    }

    requestItem(item) {
        console.log('InventoryRequesterV1 requestItem');
        console.log(`Request ${item}`);
    }
}

class InventoryRequesterV2 {
    constructor() {
        this.REQ_METHODS = ['WS'];
    }

    requestItem(item) {
        console.log('InventoryRequesterV2 requestItem');
        console.log(`Request ${item}`);
    }
}

// By constructing our dependencies externally and injecting them, we can easily
// substitute our request module for a fancy new one that uses WebSockets.
const inventoryTracker = new InventoryTracker(['apples', 'bananas'], new InventoryRequesterV2());
inventoryTracker.requestItems();
