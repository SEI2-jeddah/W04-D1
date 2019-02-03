# Advanced JS & ES2015


## Agenda
- Scope review
- `Let` vs `Var`
- `Const`
- Arrow (or fat) functions
- Object destructuring


![Yoda](https://i.pinimg.com/originals/58/d0/1e/58d01e4da34427555ea3b828731c3123.jpg)


### Let vs. Var
- Read more [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)


### Const
- Read more [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

### Arrow Functions

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

function printMyName() {
  let myName = 'Ghadeer';
  console.log(myName);
}

```



#### Refactor 

```
const addFive = (num) => 5 + num;

const divide = (num1, num2) => num1/num2;

const printMyName = () => {
  let myName = 'Ghadeer';
  console.log(myName);
}
```
- Read more about arrow functions [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)



## Resources
- [Slides](./slides/es2015.pdf)
- [Code](./code)