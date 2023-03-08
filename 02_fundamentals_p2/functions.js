// fucntion declaration

function calcAge(birthYear) {
    // currently is 2037 lol
    return 2037 - birthYear;
}

// function expression
const calcAge2 = function () {
    return 2037 - birthYear;
}

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;

const yearUntillRetirement = (nowYear, retYear) => retYear - nowYear
const yearUntillRetirement2 = birthYear => {
    const age = 2037 - birthYear
    const retirementAge = 65
    return retirementAge - age
}

console.log(yearUntillRetirement2(99))