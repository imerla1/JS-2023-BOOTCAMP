console.log(3 || 'Georeg') // => 3

'' || 'jonas'  // -> Jonas
true || 0 // -> true
undefined || null // -> null (|| returns the first truthy value, or the last value if all values are falsy) 



const restaurant = {
    numGuests: 0
}

// This will Return 10 but actually there are 0 guests 
const guests = restaurant.numGuests || 10 

// Instead of || we can Use ?? Which will only check for null and undefined

//  This will return 0
const correctGuests = restaurant.numGuests ?? 10 

console.log(guests, correctGuests)