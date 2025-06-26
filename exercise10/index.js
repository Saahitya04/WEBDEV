// Write a function to calculate the factorial of a number using reduce and loops.

let a = prompt("Enter a number to calculate the factorial: ");

// let arr = [1];

// for(let i = 1; i < a; i++) {
//     arr.push(i+1);
// }

// alert(`Factorial of ${a} is: ${arr.reduce((a,b) => a*b)}`);


function factorial(n) {
    if(n == 0 || n == 1) return 1;
    let arr = Array.from({length: n}, (_, i) => i+1);
    let c = arr.reduce((acc,curr) => {
        return acc*curr;
    });

    return c;
}

function factorialfor(n) {
    let fac = 1;
    for (let i = 1; i <= n; i++) {
        fac *= i;
    }
    return fac;
}

console.log(factorial(a));
console.log(factorialfor(a));