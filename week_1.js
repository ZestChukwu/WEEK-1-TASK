const ps = require("prompt-sync")
const prompt = ps();

const number1 = parseInt(prompt("Enter a number1: "));
const number2 = parseInt(prompt("Enter a number2: "));


const sum = number1 + number2;
const difference = number1 - number2;
const product = number1 * number2;
const quotient = number1 / number2;

console.log('The Sum of' + number1 + ' + ' + number2 + ' is: ' + sum);
console.log('The Difference of ' + number1 + ' - ' + number2 + ' is: ' + difference);
console.log('The Product of ' + number1 + ' * ' + number2 +  ' is: ' + product);
console.log('The Quotient of ' + number1 + ' / ' + number2 + ' is: ' + quotient);

