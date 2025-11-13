const make = "Mercedes";
const model = "E-class";
const year = 2010;
const color = "silver";

let html;

// Traditional way (ES5) hard to read 
html = '<ul>' +
    '<li>Make: ' + make + '</li>' +
    '<li>Model: ' + model + '</li>' +
    '<li>Year: ' + year + '</li>' +
    '<li>Color: ' + color + '</li>' +
    '</ul>';

document.body.innerHTML = html;

// with templates strings (es-6) clear 

html = `
        <ul>
        <li>Make: ${make} </li>
        <li>Model: ${model}</li>
        <li>Year: ${year}</li>
        <li>color: ${color}</li>
        <li>${year >= 2019 ? 'brand new' : 'used car'}</li>
    </ul>
`

document.body.innerHTML = html;



