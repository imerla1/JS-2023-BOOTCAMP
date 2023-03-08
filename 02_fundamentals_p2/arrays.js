// Create Array

let arr = [1, 2, 3, 4]
let arr2 = Array(1,2,3,4)
console.log(arr, arr2)

// slicing
console.log(arr[0])
console.log(arr.slice(1, 3))

// Add elems
// Appends new elements to the end of an array, and returns the new length of the array.
let arr3 = []
arr3.push(5,6)
console.log(arr3)

// Inserts new elements at the start of an array, and returns the new length of the array.
arr3.unshift("elem")

// remove elemnts

let arr4 = [1,2,3]

// Removes the last element from an array and returns it. 
// If the array is empty, undefined is returned and the array is not modified.
arr4.pop()
// Removes the first element from an array and returns it. 
// If the array is empty, undefined is returned and the array is not modified.
arr4.shift()

// Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
console.log(arr4.indexOf(2))

// Determines whether an array includes a certain element, returning true or false as appropriate.

// @param searchElement — The element to search for.

// @param fromIndex — The position in this array at which to begin searching for searchElement.
console.log(arr4.includes(2))