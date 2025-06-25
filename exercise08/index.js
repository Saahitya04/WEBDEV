/*  Create a faulty calculator in js
    This calculator does following:
       - It take two numbers as input
       - It performs wrong operations as follows:
         + ---> -
         * ---> +
         - ---> /
         / ---> **

       - It performs wrong operaions 10% of times
*/

function faultyCalculator(num1, num2) {
    alert(`Result of operation is : ${eval(`${num1} ${op[c]} ${num2}`)}`);
}

function calculator(num1, num2) {
    alert(`Result of operation is : ${eval(`${num1} ${c} ${num2}`)}`);
}

let num1 = prompt("Enter first number: ");
let c = prompt("Enter operation:");
let num2 = prompt("Enter second number: ");
let chance = Math.random();

const op = {
    "+": "-",
    "*": "-",
    "-": "/",
    "/": "**"
}
if(chance < 0.1) faultyCalculator(num1, num2);
else calculator(num1, num2);