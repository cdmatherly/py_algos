/* 
Given in an alumni interview
String Encode
You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears. 

If final result is not shorter (such as "bb" => "b2" ),
return the original string.
*/


const str1 = "aaaabbcddd";
const expected1 = "a4b2cd3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

// RIOT   Read Input Output Talk


// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-7 mins to write the pseudocode here:



// create the function and decide what params it needs and what it will return

function encode(str) {
    var count = 1
    var newStr = ""
    if (str.length <= 1) {
        return str
    }
    for (var i = 0; i < str.length; i++) {
        if (str[i] != str[i - 1]) {
            newStr += str[i]
        }
        if (str[i] == str[i + 1]) {
            count++
        }
        else {
            if (count != 1) {
                newStr += count
                count = 1
            }
        }
    }
    if(newStr.length ==  str.length){
        return str
    }
    return newStr
}
console.log(encode(str1))
console.log(encode(str2))
console.log(encode(str3))
console.log(encode(str4))