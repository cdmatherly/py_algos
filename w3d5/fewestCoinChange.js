
/* 
Given an int to represent how much change is needed
calculate the fewest number of coins needed to create that change,
using the standard US denominations
quarter: 25c
dime: 10c
nickel: 5c
penny: 1c
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 51;
const expected2 = { quarter: 2, penny: 1 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

// RIOT

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:


// create the function and decide what params it needs and what it will return
function fewestCoinChange(balance){
    var myCoins = {}
    if (balance >= 25){
        var quartersNeeded = Math.floor(balance/25)
        myCoins['quarters'] = quartersNeeded
        balance -= quartersNeeded*25
    }
    if (balance >= 10){
        var dimesNeeded = Math.floor(balance/10)
        myCoins['dimes'] = dimesNeeded
        balance -= dimesNeeded*10
    }
    if (balance >= 5){
        var nickelsNeeded = Math.floor(balance/5)
        myCoins['nickels'] = nickelsNeeded
        balance -= nickelsNeeded*5
    }
    if (balance >= 1){
        var penniesNeeded = balance
        myCoins['pennies'] = penniesNeeded
        balance -= penniesNeeded
    }
    return myCoins
}

console.log(fewestCoinChange(cents1))
console.log(fewestCoinChange(cents2))
console.log(fewestCoinChange(cents3))
console.log(fewestCoinChange(cents4))