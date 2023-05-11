# Data Structures, modern Operators, Strings

## Destructing Array

In JavaScript, destructuring is a feature that allows you to extract data from arrays or objects into distinct variables. It provides a concise way to extract properties or values from arrays and objects into separate variables by using a syntax that mirrors the construction of array and object literals.

```js
let arr = [1, 2, 3];
let [a, b, c] = arr;

```

## Destructing Object

In JavaScript, object destructuring is a way to extract values from objects and assign them to variables with a concise syntax. It provides a way to unpack values from objects into separate variables, which can be quite useful when dealing with large objects.

```js
const person = { name: 'John Doe', age: 30 };
const { name, age } = person;

console.log(name); // "John Doe"
console.log(age); // 30
```


We can also use destructuring to set default values for properties that may not exist in the object:

```js
const person = { name: 'John Doe', age: 30 };
const { name, age, gender = 'unknown' } = person;

console.log(gender); // "unknown"
```

We can also use destructuring to rename variables:

```js
const person = { name: 'John Doe', age: 30 };
const { name: fullName, age: years } = person;

console.log(fullName); // "John Doe"
console.log(years); // 30
```

Object destructuring can also be used in function parameters to extract properties from objects:

```js
function printPerson({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const person = { name: 'John Doe', age: 30 };
printPerson(person); // "Name: John Doe, Age: 30"

```