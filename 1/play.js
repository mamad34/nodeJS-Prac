// refresher

const { pseudoRandomBytes } = require("crypto");

const hobbies = ["sport", "cooking"];

console.log(hobbies.map((hobby) => "hobbie : " + hobby));

// const copiedArray = hobbies.slice();
// console.log(copiedArray);

const copiedArray = [...hobbies];
console.log(copiedArray);

const toArray = (...args) => {
  return [...args];
};

console.log(toArray(1, 2, 3, 4, 5));

const person = {
  name: "Max",
  age: "23",
  greet() {
    console.log(`Hi i am ${this.name}`);
  },
};

console.log(person.greet());

const printName = ({ name }) => {
  console.log(name);
};

printName(person);

const { name, age } = person;
console.log(name, age);

const deBussy = ["DE", "BUSSY"];
const [num1, num2] = deBussy;
console.log(num1, num2);
