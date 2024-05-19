const globalNum = 10;

let checkScope = () => {
  console.log(globalNum);
};

//It's important to note that function expressions and arrow functions do not undergo hoisting

// exampleFunc(); this won't work and we cannot call the arrow function beforehand because they don't undergo hoisting
exampleFunc222();
const localNum = globalNum; //nadvor ja napraviv bidejki vnatre dava greska poradi scope-ot

console.log(globalNum === localNum);

checkScope();

if (true) {
  let blockNum = 10;
}
console.log(typeof blockNum);

let score = 15;

if (score >= 90 && score < 100) {
  console.log("Grade A");
} else if (score >= 80 && score < 90) {
  console.log("Grade B");
} else console.log("Enter valid number");

let dayNumber = "Monday";
switch (dayNumber) {
  case "Monday":
    console.log("The day is Monday");
  //   break;
  case "Monday":
    console.log("Kje se isprinta i ova ako nema break");
    break;
  default:
    console.log("Kje se isprinta ova ako ne odgovara nisto");
}

let addNumbers = (num1, num2, num3) => {
  let sum = num1 + num2 + num3;
  //   console.log(sum);
  return sum;
};

console.log(addNumbers(5, 15, 20));

let compareNumbers = (num1, num2) => {
  if (num1 === num2) {
    console.log("The numbers are equal");
  } else console.log("The numbers ARE NOT equal");
};

compareNumbers(2, -2);

let age = 18;

if (age > 21) {
  console.log("Mozhete da glasate i piete alkohol");
} else if (age >= 18 && age < 21) {
  console.log("Mozhete samo da glasate!");
} else if (age > 0 && age < 18) {
  console.log("Ne mozhete nishto!");
} else console.log("Vnesi normalen broj :)");

function exampleFunc() {
  console.log("This is the example function");
}

let exampleFunc222 = () => {
  console.log("This is the example function222");
};
