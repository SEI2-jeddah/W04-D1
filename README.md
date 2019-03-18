# Advanced JS & ES2015



![Yoda](https://i.pinimg.com/originals/58/d0/1e/58d01e4da34427555ea3b828731c3123.jpg)




## Agenda
1. Scope review
2. `Let` vs `Var` [[source](https://codeburst.io/difference-between-let-and-var-in-javascript-537410b2d707)]
3. `Const` [[source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)]
4. Arrow (or fat) functions


### 1. Scope review
- See [slides](./slides/scope_review.pdf)


### 2. Let vs. Var
- `let` gives you the privilege to declare variables that are limited in scope to the block, statement of expression unlike `var`.

- `var` is a keyword which defines a variable globally regardless of block scope.

#### 2.1 Block Scoping
- For loop using `let` variable

```js
for (let i = 0; i < 10; i++){
  console.log(i); // i is visible thus is logged in the console as 0,1,2,....,9
}
  console.log(i); //throws an error as "i is not defined" because i is not visible
```

- For loop using `var` variable 
  
```js
for (var i = 0; i < 10; i++){
  console.log(i); // i is visible thus is logged in the console as 0,1,2,....,9
}
  console.log(i); //i is visible here too. thus is logged as 10.
```


#### 2.2 Re-declaration
- `var` variables can be re-declared in the same scope but `let` variables can't be re-declared in the same scope.

```js
var varVariable = "I'm a var variable";
var varVariable = "I think more than a variable"; // No issues
// varVariable <-- "I think more than a variable"
```

```js
let letVariable = "I'm a let variable";
let letVariable = "I think more than a variable"; // Uncaught SyntaxError: Identifier 'letVariable' has already been declared
// letVariable <-- "I'm a let variable"
```

#### 2.3 Function Scoping
- `let` and `var` variables work the same way when in comes to function scoping

```js
function ohFunctionMyFunction(){
    let letVariable = "I'm a let variable";
    var varVariable = "I'm a var variable";
    console.log(letVariable);
    console.log(varVariable);
}
ohFunctionMyFunction()
// <-- "I'm a let variable"
// <-- "I'm a var variable"

console.log(letVariable); // Uncaught ReferenceError: letVariable is not defined
console.log(varVariable); // Uncaught ReferenceError: varVariable is not defined
```



- Read more about var vs let [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)


### 3. Const
- Constants are block-scoped, much like variables defined using the let statement. The value of a constant cannot change through reassignment, and it can't be re-declared.

```js
const myFavoritePerson = "Usman";
let myFavoriteAlien = "Moath";

myFavoritePerson = "Mic"; // Error
myFavoriteAlien = "Ghadeer"; // Good call
```

- Read more about const [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

### 4. Arrow Functions

#### But How?
1. Convert regular function declarations to arrow function expressions 
2. Refactor arrow functions
3. Debug your arrow functions



#### Convert 

```
function addFive(num) {
  return 5 + num;
}

function divide(num1, num2) {
  return num1/num2;
}

function whosTheBestIA() {
  let iaName = 'Ghadeer';
  console.log(iaName);
}

```



#### Refactor 

```
const addFive = (num) => 5 + num;

const divide = (num1, num2) => num1/num2;

const whosTheBestIA = () => {
  let iaName = 'Ghadeer';
  console.log(iaName);
}
```
- Read more about arrow functions [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

<br>

#### YOU DO

Refactor the following code to ES6. The console should return:

![](https://i.imgur.com/nWeM10Z.png)

<br>

```
var alwaysTrue = true;

function myBarn(petMe) {
 var that = this;
  that.petMe=petMe;
  var animals = {
    petMe: petMe,
  };
  
  if (alwaysTrue) {
    var animals = {
      petMe: "pig",
    };
    var greeting = 'This animal should be a pig; it is a: ' + animals.petMe + '.';
    
    console.log(greeting);
  }
  
  console.log('This animal should be a dog; it is a: ' + animals.petMe);  // 2
}

myBarn("dog");
```



## Resources
- [Slides](./slides/es2015.pdf)
- [Code](./code)
