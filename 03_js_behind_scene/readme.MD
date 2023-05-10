# Scopes

## ES6 Scopes

- **Global Scope**: Variables declared outside of any function or code block have global scope and can be accessed from any part of the code.
- **Function Scope**: Variables declared inside a function have function scope and can only be accessed within that function and any nested functions inside it.
- **Block Scope**: Variables declared with let and const inside a block (e.g., within an if statement or a loop) have block scope and can only be accessed within that block.
- **Lexical Scope**: Lexical scope, also known as static scope, is based on the physical location of a variable in the source code. Variables declared in an outer function can be accessed by inner functions defined within it, even if the inner functions are called from a different part of the code.

```js
const globalVar = "I am global!"; // Global scope

function exampleFunction() {
  const functionVar = "I am local to exampleFunction!"; // Function scope

  if (true) {
    const blockVar = "I am local to this block!"; // Block scope
    console.log(blockVar);
  }

  function innerFunction() {
    console.log(globalVar); // Accessing globalVar from innerFunction
    console.log(functionVar); // Accessing functionVar from innerFunction
  }

  innerFunction(); // Calling innerFunction
}

exampleFunction(); // Calling exampleFunction
```

## this keyword


In JavaScript, the `this` keyword is used to refer to the current execution context. Its value is determined based on how the function is called, and it can be different in different contexts. Here are some examples of how the `this` keyword works in different scenarios

1) In the global scope, `this` refers to the global object. In a browser, this is the window object, while in Node.js, it is the global object.

`console.log(this); // logs the global object`
2)In a function that is called as a method of an object, this refers to the object that the method is called on.
```js
const person = {
  name: "Alice",
  sayHi() {
    console.log(`Hi, my name is ${this.name}`);
  },
};

person.sayHi(); // logs "Hi, my name is Alice"

```

3)When a function is called with `call` or `apply`, this is set explicitly to the first argument passed to `call` or `apply`.

```js
function sayHi() {
  console.log(`Hi, my name is ${this.name}`);
}

const person = { name: "Alice" };

sayHi.call(person); // logs "Hi, my name is Alice"
```
4) In arrow functions, this is determined lexically, based on the enclosing scope.
```js
const person = {
  name: "Alice",
  sayHi: () => {
    console.log(`Hi, my name is ${this.name}`);
  },
};

person.sayHi(); // logs "Hi, my name is undefined"
```
Note that in the last example, this is not referring to the person object, but to the global object. This is because arrow functions do not have their own this binding, so the value of this is determined lexically, based on the enclosing scope. In this case, the enclosing scope is the global scope, so this refers to the global object, which does not have a name property.