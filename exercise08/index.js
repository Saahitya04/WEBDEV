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
    console.log("Sum of " + num1 + " and " + num2 + " is: " + (num1 - num2));
    console.log("Product of " + num1 + " and " + num2 + " is: " + (num1 + num2));
    if(num2 === 0) {
        console.log(num2, "can not be zero");
    }
    else console.log("Difference of " + num1 + " and " + num2 + " is: " + (num1 / num2));
    console.log("Division of " + num1 + " and " + num2 + "   is: " + (num1 ** num2));
}

function calculator(num1, num2) {
    console.log("Sum of " + num1 + " and " + num2 + " is: " + (num1+num2));
    console.log("Product of " + num1 + " and " + num2 + " is: " + (num1*num2));
    console.log("Difference of " + num1 + " and " + num2 + " is: " + (num1-num2));
    if(num2 === 0) {
        console.log(num2, "can not be zero");
    }
    else console.log("Division of " + num1 + " and " + num2 + "   is: " + (num1/num2));
}

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));
let chance = Math.random();
if(chance < 0.1) faultyCalculator(num1, num2);
else calculator(num1, num2);