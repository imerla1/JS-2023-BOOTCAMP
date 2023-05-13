const arr = [7, 8, 9];

// Create New Array from arr

const newArr = [1, 2, ...arr, 9, 5, ...arr];
console.log(newArr);

// Copy Array

arrayCopied = [...arr];
arrayCopied.push(25);

// Join 2 or more arrays

joinedArray = [...arr, ...arrayCopied];

console.log(joinedArray);

const myString = "george";

const letters = [...myString];
console.log(letters);

function greeting(name, surname) {
  console.log(`Welcome ${name} ${surname}`);
}

const myInfo = ["george", "imerlishvili"]

greeting(...myInfo)

// Objects

const myObj = {
    inActive: false,
    admin: true
}

// Create New object based on myObj

const newObject = {...myObj, additionalData: true}
console.log(newObject)