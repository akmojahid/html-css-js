// Creating Arrays
// Arrays in JavaScript can be created in several ways:
//------Methods of an Array-------


// Using Array Literals

let fruitsA = ['Apple', 'Banana', 'Cherry'];

// Using the Array Constructor
// javascript

let fruitsB = new Array('Apple', 'Banana', 'Cherry');


let emptyArray = [];

// Accessing Array Elements
// You can access elements in an array using their index, starting from 0.


let fruitsC = ['Apple', 'Banana', 'Cherry'];
console.log(fruits[0]); // 'Apple'
console.log(fruits[2]); // 'Cherry'

// Modifying Arrays
// You can change the elements of an array by accessing them via their index.

let fruits = ['Apple', 'Banana', 'Cherry'];
fruits[1] = 'Blueberry';
console.log(fruits); // ['Apple', 'Blueberry', 'Cherry']

// Array Properties and Methods
// length: The length property returns the number of elements in an array.

let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits.length); // 3

// Methods
// push(): Adds one or more elements to the end of an array and returns the new length of the array.

let fruits = ['Apple', 'Banana'];
fruits.push('Cherry');
console.log(fruits); // ['Apple', 'Banana', 'Cherry']

// pop(): Removes the last element from an array and returns that element.

let fruits = ['Apple', 'Banana', 'Cherry'];
let lastFruit = fruits.pop();
console.log(lastFruit); // 'Cherry'
console.log(fruits); // ['Apple', 'Banana']

// unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.

let fruits = ['Banana', 'Cherry'];
fruits.unshift('Apple');
console.log(fruits); // ['Apple', 'Banana', 'Cherry']

// shift(): Removes the first element from an array and returns that element.

let fruits = ['Apple', 'Banana', 'Cherry'];
let firstFruit = fruits.shift();
console.log(firstFruit); // 'Apple'
console.log(fruits); // ['Banana', 'Cherry']

// splice(): Adds/Removes elements from an array.

let fruits = ['Apple', 'Banana', 'Cherry'];
fruits.splice(1, 1, 'Blueberry'); // Removes 'Banana' and adds 'Blueberry' at index 1
console.log(fruits); // ['Apple', 'Blueberry', 'Cherry']

// slice(): Returns a shallow copy of a portion of an array into a new array.

let fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
let newFruits = fruits.slice(1, 3);
console.log(newFruits); // ['Banana', 'Cherry']

// forEach(): Executes a provided function once for each array element.

let fruits = ['Apple', 'Banana', 'Cherry'];
fruits.forEach(fruit => console.log(fruit));

// map(): Creates a new array with the results of calling a provided function on every element in the calling array.

let numbersA = [1, 2, 3];
let doubled = numbersA.map(number => number * 2);
console.log(doubled); // [2, 4, 6]

// filter(): Creates a new array with all elements that pass the test implemented by the provided function.

let numbersB = [1, 2, 3, 4];
let evennumbers = numbersB.filter(number => number % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce(): Executes a reducer function on each element of the array, resulting in a single output value.

let numbersC = [1, 2, 3, 4];
let sum = numbersC.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 10

