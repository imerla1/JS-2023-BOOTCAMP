const user = {
  name: "John",
  address: {
    city: "New York",
    street: "123 Main St",
    zipCode: "10001",
  },
};

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

const entries = Object.entries(user);

console.log('------------------')
for(const [k, v] of entries){
    console.log(k, v)
}


