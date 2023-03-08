// JavaScript Fundamentals – Part 2
// Coding Challenge #2

let calcTip = (billValue) =>
    billValue >= 50 && billValue <= 50 ? billValue * 0.15 : billValue * 0.2;

const bills = [125, 555, 44]

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]

console.log(bills, tips, total)

// 2ez4rtz