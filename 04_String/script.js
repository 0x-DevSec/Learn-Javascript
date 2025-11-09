// Let's start with two simple text variables
// These are called "strings" in JavaScript (text data)
const firstName = 'Elon';
const lastName = 'Musk';

// ----------------------------------------------------
// 1. CONCATENATION (joining strings together)
// ----------------------------------------------------

// We can join two strings using the + symbol
let value = firstName + ' ' + lastName; // adds a space between them

console.log(value); // Output: "Elon Musk"

// ----------------------------------------------------
// 2. APPEND (adding more text to an existing string)
// ----------------------------------------------------

// First, let's set value to 'Elon'
value = 'Elon';

// Then we add (append) 'Musk' to it using +=
value += ' Musk'; // same as value = value + ' Musk';

console.log(value); // Output: "Elon Musk"

// ----------------------------------------------------
// 3. LENGTH OF STRING
// ----------------------------------------------------

// The .length property tells you how many characters (letters) are in the string
value = firstName.length;

console.log(value); // Output: 4 (because "Elon" has 4 letters)

// ----------------------------------------------------
// 4. concat() FUNCTION
// ----------------------------------------------------

// Another way to join (concatenate) strings is by using .concat()
value = firstName.concat(' ', lastName);

console.log(value); // Output: "Elon Musk"

// ----------------------------------------------------
// 5. ESCAPING CHARACTERS
// ----------------------------------------------------

// Sometimes you need to include special characters like an apostrophe (')
// To do that safely, use a backslash (\) before it

value = 'That\'s awesome'; // without the \ it would break

console.log(value); // Output: "That's awesome"

// ----------------------------------------------------
// 6. CHANGING CASE (uppercase or lowercase)
// ----------------------------------------------------

// toUpperCase() changes all letters to BIG letters
value = firstName.toUpperCase(); // <- don't forget the parentheses ()
console.log(value); // Output: "ELON"

// toLowerCase() changes all letters to small letters
value = firstName.toLowerCase(); 
console.log(value); // Output: "elon"

// ----------------------------------------------------
// 7. SUBSTRING()
// ----------------------------------------------------

// substring(start, end) cuts out part of the text
// It starts at "start" index, and stops right before "end" index
// Index = position of each letter (counting starts from 0)
value = firstName.substring(0, 2);

console.log(value); // Output: "El" (takes letters at index 0 and 1)

// ----------------------------------------------------
// 8. SLICE()
// ----------------------------------------------------

// slice() works almost the same as substring()
value = firstName.slice(0, 2);

console.log(value); // Output: "El"

// slice() can also take negative numbers to start from the end
value = firstName.slice(-2);
console.log(value); // Output: "on" (the last 2 letters)

// ----------------------------------------------------
// 9. SPLIT()
// ----------------------------------------------------

// split() turns a string into an array (list) by separating it using a character
// For example, split by space (' ')
let str = 'Elon Musk SpaceX Tesla';
value = str.split(' ');

console.log(value); // Output: ["Elon", "Musk", "SpaceX", "Tesla"]

// ----------------------------------------------------
// 10. indexOf()
// ----------------------------------------------------

// Finds the position (index) of the first occurrence of a letter or word
value = firstName.indexOf('o');

console.log(value); // Output: 2 (E=0, l=1, o=2, n=3)

// ----------------------------------------------------
// 11. charAt()
// ----------------------------------------------------

// Returns the character at a specific position (index)
value = firstName.charAt(1);

console.log(value); // Output: "l"

// ----------------------------------------------------
// 12. replace()
// ----------------------------------------------------

// Replaces part of a string with something else
let phrase = 'I love coding';
value = phrase.replace('coding', 'JavaScript');

console.log(value); // Output: "I love JavaScript"

// ----------------------------------------------------
// 13. includes()
// ----------------------------------------------------

// Checks if the string *contains* a certain word or letter
// Returns true or false (boolean)

value = phrase.includes('coding'); 
console.log(value); // Output: true

value = phrase.includes('Python');
console.log(value); // Output: false
