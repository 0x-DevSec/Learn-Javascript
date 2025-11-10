// Creat a new Array

const numbers = [23,4,67,89,10,7];
const anotherNumbers = new Array(23,45,45,56,6);
const lang = ['javascritp','box','python','html'];
const mixed = [23 , 'test' , null , true ,new Date()];


// Get array length
let value = numbers.length;
console.log(value);

// check if is Array
let isarray = Array.isArray(numbers);
console.log(isarray)

// get a specific element 
let get = lang[2];
console.log(get);
lang[2] = 'hamza';
console.log(lang);

// Find index of value
console.log(numbers.indexOf(10));

// array manipulation

let myarr = [12,34,45,100];
console.log(myarr);

// Add on to the end
myarr.push(1337);
console.log(myarr);

// add on the front 
myarr.unshift('hello')
console.log(myarr);

// take from the end
myarr.pop();
console.log(myarr);

// take from the start
myarr.shift();
console.log(myarr);

// splice delte part of arrays
// myarr.splice(1,3)
// console.log(myarr);

// reverse an array
myarr.reverse();
console.log(myarr);

// concatenate arrays
let content = myarr.concat(lang);

console.log(content);

// sorting arrays

console.log(lang.sort());
// not worked with numbers
console.log(numbers.sort());

// sort  number function
console.log(numbers.sort(function( x , y)
{
    return x - y;
}));

console.log(numbers.sort(function( x , y)
{
    return y - x;
}));











