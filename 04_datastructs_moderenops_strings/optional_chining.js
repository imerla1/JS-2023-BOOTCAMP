const user = {
  name: "John",
  address: {
    city: "New York",
    street: "123 Main St",
    zipCode: "10001",
  },
  order(orderId, name) {
    return `Ordered ${name}: with ID ${orderId}`;
  },
};

const city = user.address?.city;
console.log(city); // Output: 'New York'

const postalCode = user.address?.postalCode;
console.log(postalCode); // Output: undefined

// We can Use Nullish Coalescing asWell

const postalCode2 = user.address?.postalCode ?? "default";

console.log(postalCode2);

// Methods Checking
console.log(user.order?.(0xf5, "CocaCola") ?? "Method doesn't exist");
