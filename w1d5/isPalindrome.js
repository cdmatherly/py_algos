/* 
String: Is Palindrome
Create a function that returns a boolean whether the string is a strict palindrome. 
- palindrome = string that is same forwards and backwards

Do not ignore spaces, punctuation and capitalization
*/
// level
// racecar
// tacocat

const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;

// RIOT   Read Input Output Talk


// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-7 mins to write the pseudocode here:



// create the function and decide what params it needs and what it will return

function reverseString(str) {
    var reversed = "";

    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    if (reversed == str){
        return true;
    }
    return false;
}

console.log(reverseString(str1))
console.log(reverseString(str2))
console.log(reverseString(str3))
console.log(reverseString(str4))