// JavaScript Fundamentals – Part 2
// Coding Challenge #3

// BMI = mass / height ** 2

let MarkObject = {
  weight: 78,
  height: 169,
  fullName: "Mark Miller",
};

let JohnObject = {
  weight: 92,
  height: 195,
  fullName: "John Smith",
};

function calcBmi(mass, height) {
    // * 10000 to avoid leading zeros
  return mass / height ** 2 * 10000;
}

console.log(calcBmi(78, 169));
