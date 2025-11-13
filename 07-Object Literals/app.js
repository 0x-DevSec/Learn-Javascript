'use strict'; // Enables strict mode to catch common coding mistakes (e.g., using undeclared variables)

// Create an object named "car" using object literal syntax
const car = {
  // ---- Basic properties (key-value pairs) ----
  price: 123,                   // Number property
  registrationNum: 'ABC123',    // String property
  auto: true,                   // Boolean property
  year: 2010,                   // Number property

  // ---- Nested object ----
  address: {                    // Object property inside another object
    city: "Morocco",
    postcode: 'ER2345'
  },

  // ---- Array property ----
  options: ['audio', 'ai', 'black'], // Array stored as a property

  // ---- Method (function inside an object) ----
  getAge: function () {
    // "this" refers to the current object (car)
    const age = 2025 - this.year;
    console.log("Age of this car is: " + age);
    return age; // Return the value instead of just logging it
  }
};

// -------------------------------
// Accessing and displaying values
// -------------------------------

let value;

// Accessing the entire object
value = car;
console.log("Car object:", value);

// Accessing simple properties
console.log("Registration number:", car.registrationNum);
console.log("Automatic:", car.auto);
console.log("Price:", car.price);

// Accessing nested object properties
console.log("Postcode:", car.address.postcode);

// Accessing array property
console.log("Options:", car.options);

// Calling a method (function inside the object)
console.log("Car age (returned value):", car.getAge());
