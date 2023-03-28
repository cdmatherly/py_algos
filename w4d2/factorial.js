/* 
Recursive Factorial
Input: integer
Output: integer, product of ints from 1 up to given integer

If less than zero, treat as zero.
Bonus: If not integer, truncate (remove decimals).

Experts tell us 0! is 1.

rFact(3) = 6 (1*2*3)
rFact(6.8) = 720 (1*2*3*4*5*6)
*/

const num1 = 3;
const expected1 = 6;
// Explanation: 1*2*3 = 6

const num2 = 6.8;
const expected2 = 720;
// Explanation: 1*2*3*4*5*6 = 720

const num3 = 0;
const expected3 = 1;


// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:

// create the function and decide what params it needs and what it will return

// function factorial(num, expected = 1){
//     num = Math.trunc(num)
//     if (num > 0){
//         console.log("num = " + num)
//         expected *= num
//         console.log("expected = " + expected)
//         return factorial(num-1, expected)
//     }
//     return expected
// }

function factorial(num){
    num = Math.floor(num)
    if (num <= 0){
        return 1
    }
    else {
        return num * factorial(num-1)
    }
}

console.log(factorial(num1))
console.log(factorial(num2))
console.log(factorial(num3))