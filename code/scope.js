// // var global = "I'm a global variable";

// // function notSoGlobal() {
// //   var local = "I'm a local variable";
// // }

// // console.log(global);
// // console.log(local);

// // Create a globalVariable
// // Create a function localFunction
// // create a localVariable
// // Create another localLocalFunction
// // create a localLocalVariable

// var globalVariable = "Global Scope";
// var localVariable = "Local but global Scope";

// function localFunction() {
//   localVariable = "Local Scope";
//   function localLocalFunction() {
//     var localLocalVariable = "Local Local Scope";
//     // 1. What can I access from here?
//   }
//   // 2. What can I access from here?
//   localLocalFunction();
// }

// // 3. What can I access from here?
// localFunction();
// console.log(localVariable);


















// // // A
// // var global = "A Global Variable"; // 1

// // function doSomething() { // 3
// //   var local = "Local Variable: Do Something";
// //   console.log(local);
// // }

// // console.log(global); // 2
// // doSomething();
// // console.log(local);
// // // ----------------------------------------------------------------
// // // B
// // var global = "Global Scope";

// // function createInnerScope() { // 1
// //   var innerScope = "Inner Scope";

// //   function createInnerInnerScope() { // 2
// //     var innerInnerScope = "InnerInner Scope";
// //     // 3. What can we access from here?
// //   }

// //   createInnerInnerScope();
// //   // 2. What can we access from here?
// // }

// // createInnerScope();
// // // 1. What can we access from here?

// // ----------------------------------------------------------------
// // C
// // console.log(someVariable);

// // sayHello();
// // function sayHello() {
// //   console.log("Hi there");
// // }

// // var someVariable = true;




// function foo() {
//   var someVariable = "I'm random";
// }
console.log(someVariable);
var someVariable = "I'm random";


// sayHi();
// function sayHi() {
//   console.log("Not hi");
// }