/* 
    Recursive Sigma
    Input: integer
    Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (5+4+3+2+1)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (2+1)

const num3 = -1;
const expected3 = 0;


// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:

// create the function and decide what params it needs and what it will return

function recursion(n, sum = 0){
    // if( n < 0){
    //     n = 0
    //     console.log(n)
    //     return n
    // }
    if (n > 0){
        // console.log("N  is " + n)
        sum += Math.trunc(n)
        // console.log("Sum is " + sum)
        return recursion(n-1, sum)
    }
    return sum
}
console.log(recursion(num1))
console.log(recursion(num2))
console.log(recursion(num3))