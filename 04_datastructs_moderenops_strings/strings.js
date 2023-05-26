const airline = "TAP Air Portugal";
const plane = "A320";

console.log("string Length: ", airline.length);

// First occurrence
console.log("First occurrence", airline.indexOf("A"));

// Last occurrence
console.log("Last occurrence", airline.lastIndexOf("A"));

console.log(airline.indexOf("Air"));

// String Slice

console.log(airline.slice(0, airline.indexOf("Air")));

// toUpperCase
console.log(airline.toUpperCase());
// Lowercase
console.log(airline.toLowerCase());

// Trim the string

const testString = " Hello World    ";
// Removes the leading and trailing white space and line terminator characters from a string.
console.log(testString.trim());

// Replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const hodor = "Hold the door, hold the door";
// Replcae all door with Table
console.log(hodor.replace(/door/g, "gate"));

// includes

const gameName = "Ghost Of Tsushima";

console.log(gameName.includes("Gh"));
console.log(gameName.startsWith("Gh"));

// String Split

const str = "Hello, world!";
const words = str.split(","); // Split the string at the comma

console.log(words); // Output: ['Hello', ' world!']

// Join method

const arr = [0, 1, 2, 3, 4];
console.log(arr.join("-"))
