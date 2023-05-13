const myObject = {
  name: "John",
  age: 25,
  hobbies: ["reading", "hiking", "cooking"],
  isActive: true,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  },
  hasHobby: function (hobby) {
    return this.hobbies.includes(hobby);
  },
  favoriteHobby: function () {
    const index = Math.floor(Math.random() * this.hobbies.length);
    return this.hobbies[index];
  },
};

// Standart Destructing
const { name, age } = myObject;
console.log(name, age);

// destructuring to set default values for properties that may not exist in the object

const { hobbies, isActive = false, readOnly = true } = myObject;
console.log(hobbies, isActive, readOnly);

// destructuring to rename variables

const { name: myName, age: myAge } = myObject;

console.log(myName, myAge);
// Object destructuring can also be used in function parameters
// to extract properties from objects

function printPerson({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const person = {
  name: "John Doe",
  age: 30,
};

printPerson(person);

// Mutating Variables

let j = 0;
let b = 5;

const obj = { j: 7, b: 53 };

// Mutate

({ j, b } = obj);
console.log(j, b);
