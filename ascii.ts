ASCII;
const toLowerCase = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    if (char >= 65 && char <= 90) {
      newStr += String.fromCharCode(char - 65 + 97);
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};
console.log(toLowerCase("Lets  take LeedCode  context"));

const toUpperCase = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    if (char >= 97 && char <= 122) {
      newStr += String.fromCharCode(char - 97 + 65);
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};

console.log(toUpperCase("privet pokemon xaxa"));

let car = new Vehicle("Honda", "UK");
console.log(car);

function Vehicle(model, country) {
  this.model = model;
  this.country = country;
}

console.log();
