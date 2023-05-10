console.log(this)

const calcAge = function (birthYear) {
    console.log(2037 - birthYear)
    console.log(this)
}

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear)
    console.log(this)
}

const jonas = {
    year: 1991,
    calcAge: function(){
        console.log(this)
    }
}

const george = {
    year: 1999
}

george.calcAge = jonas.calcAge

george.calcAge()


function Person(name) {
    this.name = name;
  }
  
  const alice = new Person("Alice");
  console.log(alice.name); // logs "Alice"