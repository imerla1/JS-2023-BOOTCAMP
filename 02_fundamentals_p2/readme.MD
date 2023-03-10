## Ternary

In JavaScript, the ternary operator (also known as the conditional operator) is a shorthand way of writing an if-else statement.

The syntax of the ternary operator is as follows:

```js
condition ? expression1 : expression2
```
The condition is evaluated and if it is true, expression1 is executed and its value is returned. If the condition is false, expression2 is executed and its value is returned.

```js
let age = 20;
let message = age >= 18 ? "You are an adult" : "You are not an adult";
console.log(message); // Output: "You are an adult"
```

## Arrow functions

Arrow functions are a concise way to define functions in JavaScript. They have a shorter syntax than regular functions, and can be more readable and easier to use in some situations. Here's the basic syntax for arrow functions

```js
const add = (a, b) => {
  return a + b;
}
```

Arrow functions can also be written in a more concise form, called the "implicit return" syntax. In this syntax, the return statement is omitted, and the result is automatically returned. Here's an example:

```
const multiply = (a, b) => a * b;
```

## Arrays

### Basic Methods

#### PUSH 
The push() method adds one or more elements to the end of an array and returns the new length of the array.

#### POP 
The pop() method removes the last element from an array and returns that element.

#### unshift  
The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

#### shift 
  The shift() method removes the first element from an array and returns that element.

#### splice 

The splice() method can add and/or remove elements from an array at any position. The first argument specifies the position where the change should begin, the second argument specifies how many elements should be removed, and any additional arguments specify the elements to be added.

```js
const fruits = ['apple', 'banana', 'orange'];

// remove 1 element at index 1 and add 'mango' and 'kiwi' at that position
fruits.splice(1, 1, 'mango', 'kiwi');

console.log(fruits); // ['apple', 'mango', 'kiwi', 'orange']
```

### objects

In JavaScript, you can access an object's properties using either dot notation or bracket notation. Here are the differences between the two:
- Dot notation: To access a property using dot notation, you simply use the property name after the object name, separated by a dot. For example: person.firstName. This is the preferred notation for accessing object properties when you know the property name ahead of time.
- Bracket notation: To access a property using bracket notation, you use the object name followed by square brackets containing the property name as a string. For example: person['firstName']. This notation is useful when you need to dynamically access object properties using a variable, or when the property name contains special characters that would otherwise cause a syntax error with dot notation.

### Iteration

In JavaScript, iteration can be achieved using loops such as for, while, and do-while. During the loop, you may want to skip certain iterations or stop the loop altogether. This is where the continue and break statements come in handy.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    continue;
  }
  console.log(numbers[i]); // will only print even numbers: 2, 4, 6, 8, 10
}
```
#### continue

When encountered within a loop, the `continue` statement immediately skips to the next iteration of the loop without executing any further code within the current iteration. It's often used to skip over certain items in an array or to skip iterations that don't meet a certain condition.

#### break
When encountered within a loop, the `break` statement immediately exits the loop and stops any further iterations. It's often used to stop a loop when a certain condition is met, or to prevent infinite looping.

### while

 JavaScript, a while loop is a type of loop that repeatedly executes a block of code while a certain condition is true. The syntax for a while loop is as follows:

 ```js
 while (condition) {
  // code to be executed
}
```