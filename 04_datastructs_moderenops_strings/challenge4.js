// Coding Challenge #4

// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.

function snakeToCamelCase(string) {
  const stringArr = string.split("_");

  let returnString = "";
  for (const [index, str] of stringArr.entries()) {
    if (index != 0) {
      const ret = str[0].toUpperCase() + str.slice(1).toLowerCase();
      returnString += ret;
    } else {
      returnString += str.toLowerCase();
    }
  }
  console.log(returnString.trim());
  return returnString.trim();
}

snakeToCamelCase("   Some_Variable");
