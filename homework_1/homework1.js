// 1st exercise

let hasCoffee = true;
let hasTea = false;
let hasMilk = true;

let quest1 = hasTea || hasMilk;
let quest2 = hasCoffee && hasTea;
let quest3 = !hasTea;
let quest4 = (hasCoffee && !hasMilk) || (!hasCoffee && hasMilk);
let quest5 = (hasTea && hasMilk) || (hasCoffee && hasTea);
let quest6 = !hasCoffee && !hasTea;

console.log(quest1, quest2, quest3, quest4, quest5, quest6);

// 2nd exercise

const num1 = 10;
const num2 = 5;
const num3 = 8;
const num4 = 2;
const num5 = 12;
const num6 = 4;
const num7 = 3;

const result1 = num1 * num3 - (num4 + num6) / num3;
const result2 = num3 * num5 - num7 * num4 + num1;
const result3 = ((num6 * num5) / (num1 + num2)) * (num4 - num7);
const result4 = num5 / num7 + num3 / num4 - num5;
const result5 = num1 + (num2 * num3 * (num4 + num5)) / num7;
console.log(result1, result2, result3, result4, result5);

// 3rd exercises

const number1 = 12;
const number2 = 4;

const sum = number1 + number2;
const diff = number1 - number2;
const mult = number1 * number2;
const div = number1 / number2;
const rem = number1 % number2;

console.log(sum, diff, mult, div, rem);
