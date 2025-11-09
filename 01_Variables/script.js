// Variable Declaration

// var , let , const

var name = "youcode"
console.log(name);
name = "javascript";
console.log(name);

// Init var

var greeting;
console.log(greeting) // undefined
greeting = "hello..";
console.log(greeting);

// Variables can contain : letters , numbers , _, $
// Variables can not start with number;

var $name = "";

// Multiwords variables
var firstName = "hamza" // Camel case
var first_name = "hamza" // underscore convention


// let 

let admin = "admin";
console.log(admin);
admin = "admin123"
console.log(admin);

// const 

const pi = 3.14; // can be changed
console.log(pi)

const person = {
    name: "youcode",
    age: 5
}
console.log(person);
person.name = "1337"
console.log(person);
// person = 3; // person is a const can be changed

const number = [1,2,3,4];
console.log(number)
number.push(7);
console.log(number)

// number = 7; // ERROR person is a const can be changed






