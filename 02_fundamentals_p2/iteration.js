for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weights repetition ${i} 🏋`);
}

// Looping Arrays

const arr = [
  {
    name: "John",
    age: 30,
    hobbies: ["reading", "hiking", "photography"],
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
    },
  },
  "master",
  1,
  2,
  3,
  4,
];

for (let i = 0; i <= arr.length; i++) {
  //   console.log(arr[i]);
}

// continue, break

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Continue
for (let i = 0; i < numArray.length; i++) {
  // Will print only odd values
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
console.log("SEP =============== SEP");
// break

for (let i = 0; i < numArray.length; i++) {
  if (i > 5) {
    break;
  }
  console.log(i);
}
console.log("SEP =============== SEP");

// Looping backward

for (let i = numArray.length - 1; i >= 0; i--) {
  console.log(numArray[i]);
}

// while loop
console.log("SEP =============== SEP");

let ctr = 0;

while (ctr < 10){
    console.log(`Current counter ${ctr}`)
    ctr++
}