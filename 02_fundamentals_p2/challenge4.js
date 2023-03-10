// JavaScript Fundamentals – Part 2
// Coding Challenge # 4

// TIP Calculator 🖩

// Create an array 'bills' containing all 10 test bill values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Create empty arrays for the tips and the totals ('tips' and 'totals')

const tips = [];
const totals = [];

let calcTip = (billValue) =>
  billValue >= 50 && billValue <= 50 ? billValue * 0.15 : billValue * 0.2;

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  const total = bills[i] + tip;
  tips.push(tip);
  totals.push(total);
  console.log(`bill: ${bills[i]}, tip: ${tip}, total ${total}`);
}

// Bonus

/*
Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it
*/

function calcAverage(arr) {
  // because we are learning iteration i'will use for loop instead of reduce
  let arrSum = 0;
  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }
  return arrSum / arr.length;
}
console.log(tips)
console.log(calcAverage(tips));

// WOFOOO we implemented BONUS Section LOL 🚀🚀🚀