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

## Spread Opeartor
The spread operator in JavaScript is represented by three consecutive dots `...` and is used to spread the contents of an iterable (such as an array or a string) into individual elements.
### Spreading an array

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]
```

In the example above, the spread operator is used to spread the elements of arr1 and `arr2` into a new array `arr3`.

### Copying an array
```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2); // Output: [1, 2, 3]
```

In the example above, the spread operator is used to create a copy of `arr1` and assign it to `arr2`.

### Spreading an object

```js
const obj1 = { foo: 'bar', baz: 42 };
const obj2 = { ...obj1, qux: 3.14 };
console.log(obj2); // Output: { foo: 'bar', baz: 42, qux: 3.14 }

```

n the example above, the spread operator is used to spread the properties of obj1 into a new object obj2. The property qux is also added to obj2 in the same statement.

### Copying an object

```js
const obj1 = { foo: 'bar', baz: 42 };
const obj2 = { ...obj1 };
console.log(obj2); // Output: { foo: 'bar', baz: 42 }

```
In the example above, the spread operator is used to create a copy of obj1 and assign it to obj2.

## Short Circuiting (&& and ||)

In JavaScript, short-circuit evaluation is a way to optimize conditional logic by evaluating only parts of an expression that are necessary. It works by using the logical operators `&&` and `||` to evaluate expressions.

The `&&` operator **returns the first falsy value**, or the **last value if all values are truthy**. For example:

```js
const x = 5 && 10 && 0 && 15; // returns 0
const y = 5 && 10 && 15; // returns 15
```
In the first example, the first falsy value is 0, so that's what is returned. In the second example, there are no falsy values, so the last value (15) is returned.

The `||` operator returns the first truthy value, or the last value if all values are falsy. For example:

```js
const a = undefined || null || 0; // returns 0
const b = "hello" || null || "world"; // returns "hello"
```

### The Nullish Coalescing Operator (??)

The Nullish Coalescing Operator (`??`) is a new operator introduced in ES2020. It is used to provide a default value in case a **variable is null or undefined**.

```js
const myVariable = null;
const myDefaultValue = "Hello World";

const result = myVariable ?? myDefaultValue;
console.log(result); // Output: "Hello World"

```


## Logical assignment operators


Logical assignment operators are shorthand notations for performing a logical operation and then assigning the result to a variable in a single step. There are three logical assignment operators in JavaScript:

1) `&&=` - Logical AND assignment operator
2) `||=`- Logical OR assignment operator
3) `??=` - Logical nullish assignment operator

## Optional Chaining (?.)


Optional chaining (?.) is a feature introduced in ECMAScript 2020 (ES2020) that provides a concise way to access properties or call methods on an object without worrying about potential null or undefined values.

The optional chaining operator allows you to safely access nested properties or call methods even if one or more intermediate properties are null or undefined. If any intermediate property in the chain is null or undefined, the expression short-circuits and returns undefined, avoiding an error.

Here's an example to demonstrate the usage of optional chaining:

```js
const user = {
  name: 'John',
  address: {
    city: 'New York',
    street: '123 Main St',
    zipCode: '10001'
  }
};

const city = user.address?.city;
console.log(city); // Output: 'New York'

const postalCode = user.address?.postalCode;
console.log(postalCode); // Output: undefined

```

In the above example, the user object has an address property, which itself contains nested properties like city, street, and zipCode.

With optional chaining (?.), you can safely access the city property even if address is undefined. If address is defined, the city value is returned. However, if address is undefined, the expression short-circuits and returns undefined, avoiding an error.

Similarly, when attempting to access the non-existent postalCode property using optional chaining, it also short-circuits and returns undefined instead of throwing an error.

Optional chaining can be handy when working with objects that may have optional or conditional properties, and it helps simplify code and improve readability by reducing the need for multiple null/undefined checks.