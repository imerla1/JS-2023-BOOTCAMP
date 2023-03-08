const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    },
    hobbies: ['reading', 'swimming', 'hiking'],
    email: 'johndoe@gmail.com',
    isMarried: false,
    birthYear: function(){
        console.log(this)
        return 2023 - this.age
    }
}; 

// console.log(person.firstName)
// console.log(person['firstName'])


console.log(person.birthYear())
console.log(person['birthYear']())