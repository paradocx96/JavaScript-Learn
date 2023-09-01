// Interface Segregation Principle
// Clients should not be forced to depend upon interfaces that they do not use.

// Bad
// class DOMTraverser {
//     constructor(settings) {
//         this.settings = settings;
//         this.setup();
//     }
//
//     setup() {
//         this.rootNode = this.settings.rootNode;
//         this.settings.animationModule.setup();
//     }
//
//     traverse() {
//         // ...
//     }
// }
//
// const $ = new DOMTraverser({
//     rootNode: document.getElementsByTagName('body'),
//     animationModule() {
//     } // Most of the time, we won't need to animate when traversing.
//     // But we're forced to provide an empty method.
// });


// Good
class DOMTraverser {
    constructor(settings) {
        this.settings = settings;
        this.options = settings.options;
        this.setup();
    }

    setup() {
        this.rootNode = this.settings.rootNode;
        this.setupOptions();
    }

    setupOptions() {
        if (this.options.animationModule) {
            console.log('setup animationModule')
        }
    }

    traverse() {
        console.log('traverse')
    }
}

const $ = new DOMTraverser({
    rootNode: document.getElementsByTagName('body'),
    options: {
        animationModule() {
        }
    }
});
