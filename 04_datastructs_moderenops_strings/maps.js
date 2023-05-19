const map = new Map();

// Adding key-value pairs
map.set("name", "John");
map.set(1, "One");
map.set(true, "Yes");

console.log(map); // Output: Map { 'name' => 'John', 1 => 'One', true => 'Yes' }

// We can also Chain .set because .set method returns actual Map

const myMap = new Map();

myMap.set("name", "george").set("age", 24);

// Access Value

console.log(myMap.get("name"));

// Check existance

console.log(myMap.has("name"));

// Delete

myMap.delete("name");

console.log(myMap);

const question = new Map([
  ["question", "best programming language in the world"],
  [1, "C"],
  [2, "Pythn"],
  [3, 'Javascript'],
  ["answer", 1],
  [true, "Correct"],
  [false, "Try Again"],
]);

console.log(`Question: ${question.get('question')}`)
// iterate through MAP
for (const [k, v] of question) {
  if (typeof k === 'number'){
    console.log(`Answer ${k}: ${v}`)
  }
}

// HardCoded Answer
const answer = 1

if (answer === question.get("answer")){
    console.log(question.get(true))
}else{
    console.log(question.get(false))
}

// Convert Map to array

const mapToArray = [...question]
console.log(mapToArray)