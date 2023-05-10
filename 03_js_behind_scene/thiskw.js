console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
  },
};

const george = {
  year: 1999,
};

george.calcAge = jonas.calcAge;

george.calcAge();

const james = {
  year: 1992,
  calcAge: function () {
    console.log(`age ${2037 - this.year}`);
    const isMillenial = () => {
      console.log(this.year >= 1991 && this.year <= 1996);
    };
    isMillenial();
  },
};

james.calcAge();

const addExpr = function (a, b) {
    console.log(arguments)
};

addExpr(1,2,3)
