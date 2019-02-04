// function sayHi() {
//   console.log("Hi");
// };

// const sayHi = () => {
//   console.log("Hi");
// };

// sayHi();





// Convert to arrow function
// function addFive(num) {
//   return 5 + num;
// }
// console.log(addFive(3));

// const addFive = (num) => {
//   return 5 + num;
// }
// console.log(addFive(3));



// const divide = (num1, num2) => {
//   return num1 / num2;
// }

// const whosTheBestIA = () => {
//   let iaName = 'Ghadeer';
//   console.log(iaName);
// }

// console.log(divide(4, 2));
// whosTheBestIA();





// (num1, num2) => num1 / num2;

// console.log(divide(25, 5));

// Only get the numbers that are divisible by 3
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = nums.filter((num) => num % 3 === 0);
// console.log(result);






// Create an array of names (maybe use 3 of your friends)
// Use filter to return the names with the letter "a" in them
// Use Arrow function
// Use implicit return
const names = ["Sara", "Abdullah", "Moroj"];
const result = names.filter((name) => name.includes("a"));
console.log(result);










// // Arrow Functions

// function add(x, y) {
//   return x + y;
// }

// // const add = (x, y) => {
// //   return x + y;
// // };

// // const add = (x, y) => x + y; // Implicit Returns

// const res = add(4, 5);
// console.log(res);

// // YOU DO
// // Convert the following functions to arrow functions
// function addFive(num) {
//   return 5 + num;
// }

// function divide(num1, num2) {
//   return num1 / num2;
// }

// function whosTheBestIA() {
//   let iaName = 'Ghadeer';
//   console.log(iaName);
// }

// // Create a function called fullName
// // fullName receives two parameters, first and last and returns the full name
// //
// // 1. Use the function keyword
// // 2. Rewrite using an arrow function
// // 3. Rewrite and use implicit return


// // Turn sayHello into an arrow function

// function sayHello(name = "World") {
//   console.log("Hello " + name);
// }

// sayHello();