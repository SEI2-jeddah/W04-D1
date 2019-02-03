// // A
// var global = "A Global Variable"; // 1

// function doSomething() { // 3
//   var local = "Local Variable: Do Something";
//   console.log(local);
// }

// console.log(global); // 2
// doSomething();
// console.log(local);
// // ----------------------------------------------------------------
// // B
// var global = "Global Scope";

// function createInnerScope() { // 1
//   var innerScope = "Inner Scope";

//   function createInnerInnerScope() { // 2
//     var innerInnerScope = "InnerInner Scope";
//     // 3. What can we access from here?
//   }

//   createInnerInnerScope();
//   // 2. What can we access from here?
// }

// createInnerScope();
// // 1. What can we access from here?

// ----------------------------------------------------------------
// C
// console.log(someVariable);

// sayHello();
// function sayHello() {
//   console.log("Hi there");
// }

// var someVariable = true;