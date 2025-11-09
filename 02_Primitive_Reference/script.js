// =====================================
// PRIMITIVE DATA TYPES IN JAVASCRIPT
// =====================================

// 1️ Number
let age = 25;
console.log("Number:", age); // Output: 25

// 2️ String
let name = "Alice";
console.log("String:", name); // Output: Alice

// 3️ Boolean
let isStudent = true;
console.log("Boolean:", isStudent); // Output: true

// 4️ Undefined
let notDefined;
console.log("Undefined:", notDefined); // Output: undefined

// 5️ Null
let emptyValue = null;
console.log("Null:", emptyValue); // Output: null

// 6️ Symbol (unique value)
let uniqueId = Symbol("id");
console.log("Symbol:", uniqueId);

// 7️ BigInt (for very large numbers)
let bigNumber = 9007199254740991n;
console.log("BigInt:", bigNumber);

// Primitive values are stored directly in memory
// and copied by VALUE.
let x = 10;
let y = x; // Copy of value
y = 20;
console.log("x:", x, "y:", y); 
// x stays 10 because primitive values are separate copies


// =====================================
// REFERENCE DATA TYPES IN JAVASCRIPT
// =====================================

// Objects, Arrays, and Functions are reference types

// 1️ Object
let person = { name: "Alice", age: 25 };
let anotherPerson = person; // Copy the REFERENCE, not value

anotherPerson.age = 30;
console.log("person:", person.age); // 30
console.log("anotherPerson:", anotherPerson.age); // 30
// Both point to the same memory reference!

// 2️ Array
let colors = ["red", "green", "blue"];
let moreColors = colors;

moreColors.push("yellow");
console.log("colors:", colors); 
// ["red", "green", "blue", "yellow"]

// 3️ Function
function greet() {
  console.log("Hello!");
}
let sayHello = greet;
sayHello(); // Hello!

//  Reference types are stored in memory by REFERENCE,
// meaning variables point to the same object location.


// =====================================
// DIFFERENCE SUMMARY
// =====================================

/*
Primitive Data Types:
- Stored directly in memory
- Compared by VALUE
- Examples: String, Number, Boolean, Undefined, Null, Symbol, BigInt

Reference Data Types:
- Stored by reference (memory address)
- Compared by REFERENCE (point to same memory)
- Examples: Object, Array, Function
*/

console.log("Primitive vs Reference explained!");
