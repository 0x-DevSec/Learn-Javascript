// =========================================
// TYPE CONVERSION IN JAVASCRIPT
// =========================================

// Let's start with a number
let value = 3;

// ==============================
// 1️ Convert Number → String
// ==============================
value = String(3);

console.log("Convert Number → String:");
console.log(value);           // "3"
console.log(typeof value);    // "string"
console.log(value.length);    // 1 (because "3" has 1 character)
console.log("---------------------------");

// ==============================
// 2️ Convert Boolean → String
// ==============================
value = String(true);

console.log("Convert Boolean → String:");
console.log(value);           // "true"
console.log(typeof value);    // "string"
console.log(value.length);    // 4
console.log("---------------------------");

// ==============================
// 3️ Convert Date → String
// ==============================
// You forgot the '=' before String(new Date())
value = String(new Date());

console.log("Convert Date → String:");
console.log(value);           // Something like "Sun Nov 09 2025 ..."
console.log(typeof value);    // "string"
console.log(value.length);    // Length of the full date string
console.log("---------------------------");

// ==============================
// 4️ Convert Array → String
// ==============================
value = String([1, 2, 3, 4]);

console.log("Convert Array → String:");
console.log(value);           // "1,2,3,4"
console.log(typeof value);    // "string"
console.log(value.length);    // Number of characters in the string
console.log("---------------------------");

// =========================================
// EXTRA: Convert String back to Number
// =========================================
value = Number("123"); // or use parseInt("123")

console.log("Convert String → Number:");
console.log(value);           // 123
console.log(typeof value);    // "number"
console.log("---------------------------");

// =========================================
// 💡 Summary
// =========================================
/*
String()   → converts values to string
Number()   → converts values to number
Boolean()  → converts values to true/false
parseInt() → converts strings to integers
parseFloat() → converts strings to decimals
*/
console.log("Type Conversion Explained!");
