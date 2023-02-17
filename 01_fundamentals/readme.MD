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