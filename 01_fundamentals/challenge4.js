let billValues = [275, 40, 430]
let bill = 350
const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .2   

console.log(`Original bill was ${bill}, tip was ${tip}, total Value: ${bill + tip}`)