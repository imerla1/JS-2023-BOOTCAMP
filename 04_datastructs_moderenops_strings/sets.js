// Initialize Set
const set = new Set();
set.add(1);
set.add("hello");
set.add({ name: "george" });

// Set Methods

// Size of set
console.log(set.size);

// Delete Item

set.delete("hello");

console.log(set);

console.log(set.has(1));

// iterate
for (const item of set) {
  console.log(item);
}

// 
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

const uniquePositions = new Set(staff)
console.log(uniquePositions)


// Convert Set into array Again
const positionsArray = [...uniquePositions]
console.log(positionsArray)