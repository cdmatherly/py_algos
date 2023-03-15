/* 
Given a string,
return a new string with the duplicates excluded
//Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

// RIOT

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// pseudocode here
/* create a function that accepts a string as an argument
create an empty object
if str is empty, return str
create an empty str variable
for loop over string
    if key does not exist, add it with empty value
for loop over hashmaps keys
*/


// create the function and decide what params it needs and what it will return
function strDedupe(str){
    var map = {};
    if (str == ""){
        return str;
    };
    var newStr = "";
    for (var i = 0; i < str.length; i++){
        if (!map.hasOwnProperty(str[i])){
            map[str[i]] = i;
            newStr += str[i]
        }
    }
    
    return newStr;
}
console.log(strDedupe(str1))
console.log(strDedupe(str2))
console.log(strDedupe(str3))
console.log(strDedupe(str4))