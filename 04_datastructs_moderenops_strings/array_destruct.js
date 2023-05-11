const arr = [2, 3, 4];

// array Destructing
const [x, y, z] = arr;

console.log(x, y, z);

const nested = [1, 2, [3, 4, 5]];

const [a, b, c] = nested;
console.log(a, b, c);

// Nested Destructing

const [i, j, [l, f, k]] = nested;
console.log(l, k, f)