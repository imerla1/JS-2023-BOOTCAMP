# Data Types

## Primitive Data Types

Primitive data types in JavaScript are basic data types that represent single values. There are six primitive data types in JavaScript:
- string.
- number.
- bigint. (Represents integers with arbitrarily large precision, e.g. 9007199254740993n)
- boolean.
- undefined. (Value taken by a variable that is not defined (empty value))
- symbol. Represents unique and immutable data type, e.g. Symbol("hello"). `DEPRECATED`
- null (Represents intentional non-value, e.g. null.)

## Let, Const, Var

### let

Variables declared with let are block scoped, meaning they are only accessible within the block in which they are declared. let allows you to declare variables with the same name in the same block, and the latest declaration overwrites the previous ones.

### const 

Variables declared with const are also block scoped, like let. The main difference is that const declarations cannot be reassigned after they have been declared. In other words, const variables are read-only.


### var 
>Deprecated

Variables declared with var are function scoped, meaning they are only accessible within the function in which they are declared. If declared outside of any function, it becomes a global variable and is accessible throughout the entire program.

### var vs let
Example 1: scoping
```js
// Example 1
if (true) {
  var x = 42;
}
console.log(x); // 42

// Example 2
if (true) {
  let y = 42;
}
console.log(y); // ReferenceError: y is not defined
```
Example 2: Redeclaration
- Variables declared with var can be redeclared within the same scope.
- Variables declared with let cannot be redeclared within the same block.

```js
// Example 1
var x = 42;
var x = 50;
console.log(x); // 50

// Example 2
let y = 42;
let y = 50; // SyntaxError: Identifier 'y' has already been declared
```

## Type Conversion, Type Coercion

Type Conversion:
 - Explicit process of converting one data type to another by using a built-in method or a constructor.
 - Example: String(42) converts the number 42 to a string

```js
// Type Conversion
let num = 42;
const str = String(num); // "42"
const bool = Boolean(num); // true
```

type Coercion:
- Implicit process of converting one data type to another by the JavaScript engine when it tries to perform an operation on two values of different data types.
- Example: "3" + 42 coerces the string "3" to a number and performs the addition.

```js
const num = 42;
const str = "3";
const result = num + str; // "423"

```

## Equality Operators: == vs. ===

The == operator:
- Compares two values for equality, and performs type coercion if the types are different.
- Example: "42" == 42 returns true, as the string "42" is converted to the number 42 before the comparison.
```js
"42" == 42 // true
"0" == false // true

```
The === operator:
- Compares two values for equality, but does not perform type coercion
- Example: "42" === 42 returns false, as the types are different.

```
"42" === 42 // false
"0" === false // false
```

## The Switch Statement

In JavaScript, the switch statement is used to perform different actions
based on different conditions.

the syntax of the switch statement is as follow:

```js
switch (expression) {
  case value1:
    // code block to be executed if expression matches value1
    break;
  case value2:
    // code block to be executed if expression matches value2
    break;
  ...
  default:
    // code block to be executed if expression doesn't match any value
}

```

Here, expression is the value that is being compared to each case value. If expression matches a case value, the code block for that case is executed. The break statement is used to exit the switch statement. If expression doesn't match any case value, the default code block is executed.

```js
let day = 3;
let dayName;

switch (day) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName); // Output: Wednesday
```

## Statements and Expressions

In JavaScript, a statement is a piece of code that performs a specific action, while an expression is a piece of code that produces a value.


```js
// Statements
let x; // variable declaration
if (x > 0) { // if statement
  console.log("x is positive");
}

// Expressions
5 + 3 // mathematical expression
myFunction() // function call expression
x = 10 // assignment expression

```

Ternary Operator in JavaScript

In JavaScript, the ternary operator (also known as the conditional operator) is a shorthand way of writing an if-else statement.

The syntax of the ternary operator is as follows

```js
condition ? expression1 : expression2

```

The condition is evaluated and if it is true, expression1 is executed and its value is returned. If the condition is false, expression2 is executed and its value is returned.

Example:

```js
let age = 20;
let message = age >= 18 ? "You are an adult" : "You are not an adult";
console.log(message); // Output: "You are an adult"

```

In the example above, the age >= 18 condition is evaluated. Since age is 20, the condition is true, and the expression "You are an adult" is returned and assigned to the message variable.