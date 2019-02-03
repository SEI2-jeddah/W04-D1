// Arrow Functions

function add(x, y) {
  return x + y;
}

// const add = (x, y) => {
//   return x + y;
// };

// const add = (x, y) => x + y; // Implicit Returns

const res = add(4, 5);
console.log(res);

// YOU DO
// Convert the following functions to arrow functions
function addFive(num) {
  return 5 + num;
}

function divide(num1, num2) {
  return num1 / num2;
}

function whosTheBestIA() {
  let iaName = 'Ghadeer';
  console.log(iaName);
}

// Create a function called fullName
// fullName receives two parameters, first and last and returns the full name
//
// 1. Use the function keyword
// 2. Rewrite using an arrow function
// 3. Rewrite and use implicit return


// Turn sayHello into an arrow function

function sayHello(name = "World") {
  console.log("Hello " + name);
}

sayHello();