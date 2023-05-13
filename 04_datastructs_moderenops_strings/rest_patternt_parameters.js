// Spread, beacuse on RIGHT side of =
const arr = [1, 2, 3, ...[4, 5, 6]];

// Rest Pattern

const [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
console.log(a,b,rest)

// Functions

function add(...numbers){
    console.log(numbers)
    let sum = 0
    for(let i=0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    console.log(sum)
}
const nums = [1,2,3,4]
add(...nums)