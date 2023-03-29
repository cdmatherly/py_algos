/* 
Return the fibonacci number at the nth position, recursively.

Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
The next number is found by adding up the two numbers before it,
starting with 0 and 1 as the first two numbers of the sequence.
*/

const num1 = 0;
const expected1 = 0;

const num2 = 1;
const expected2 = 1;

const num3 = 2;
const expected3 = 1;

const num4 = 3;
const expected4 = 2;

const num5 = 4;
const expected5 = 3;

const num6 = 8;
const expected6 = 21;


// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:

// create the function and decide what params it needs and what it will return

function fibonacci(n){
    if (n < 2){
        return n
        // console.log(n-1, n-2)
    }
    // console.log(n-1, n-2)
    return fibonacci(n-1) + fibonacci(n-2)
}

// console.log(fibonacci(num1))
// console.log(fibonacci(num2))
// console.log(fibonacci(num3))
// console.log(fibonacci(num4))
// console.log(fibonacci(num5))
// console.log(fibonacci(num6))
console.log(fibonacci(50))