// Use of Console.log

console.log("Hello World")
console.log("Hello", 10, "World")

// JS Arithmetics
console.log(2 + 3) // Addition
console.log(3 - 2) // Subtraction
console.log(2 * 3) // Multiplication
console.log(3 / 2) // Division
console.log(3 % 2) // Modulus - finding remainder
console.log(3 ** 2) // Exponentiation 3 ** 2 == 3 * 3 --> SAME AS PYTHON

/*
JAVASCRIPT DATA TYPES. typeof

- NUMBERS: INT AND FLOAT
- STRINGS
- BOOLEANS
- UNDEFINED
- NULL (NONE)
*/

console.log(typeof true)

/*

JS VARIABLES - var, let, const

var -> not recommended
let -> changes over time
const -> doesn't change

*/

// Declaring different variables of different data types
let firstName = 'Atzel' // first name of a person
let lastName = 'Amoz' // last name of a person
let country = 'Mexico' // country
let city = 'Monterrey' // capital city
let age = -10 // age in years
let isMarried = false

console.log(firstName, lastName, country, city, age, isMarried)

// Same Line
let firstVar = 'Hello', secondVar = null, thirdVar = 10
console.log(firstVar, secondVar, thirdVar)