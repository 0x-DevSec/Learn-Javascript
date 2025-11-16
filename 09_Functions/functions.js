// ------------------------------
// Function Declarations
// ------------------------------

// Simple function that prints a greeting message
function sayhello() {
    console.log("hello javascript");
}

// Function that returns a greeting instead of printing it
function greet() {
    return "hello again using return!";
}

// Function with a parameter and basic validation
function myname(name) {
    if (name === undefined) {
        console.log("please enter a name");
        return;
    }
    return "hello " + name;
}

// Function that calculates the area of a rectangle
function rectangleArea(h, w) {
    return h * w;
}

// Calling the functions above
let res = rectangleArea(20, 5);

sayhello();
console.log(greet());
console.log(myname('hamza'));
console.log(res);

// ------------------------------
// Function Expression
// ------------------------------

// Function expression that returns the square of a number
const squar = function(x) {
    return x * x;
};

console.log(squar(3));

// ------------------------------
// Immediately Invoked Function Expression (IIFE)
// ------------------------------

// Executes immediately with the provided argument
(function(name) {
    console.log('hello Mr. ' + name);
})('hamza');

// ------------------------------
// Object Methods (Property Methods)
// ------------------------------

// Object with properties and methods
const car = {
    prince: 200,
    move: function() {
        console.log('moving...');
    },
    speed: function(spd) {
        console.log("speed = " + spd);
    },
};

// Adding a method to the object after creation
car.stoped = function() {
    console.log('car is stoped now');
};

// Calling the object's methods
car.move();
car.speed(100);
car.stoped();
