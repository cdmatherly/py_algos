/* 
    Parens Valid
    Given an str that has parenthesis in it
    return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.
//             v

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.
//                v
const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.
const str5 = "(";
const expected5 = false;

const str6 = "()";
const expected6 = true;
// RIOT

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:

/* 
1. create function that accepts string that includes parentheses as argument
2. create two empty variables to count each paranthesis
    set openPara to 0
    set closePara to 0
3. create for loop iterating over inputted string from 0 to string.length incrementing by 1 || checks every character in string char by char
    4. check to see if the value at our iteration within the string is "("
        5. If yes, increment openPara
    6. check to see if the value at our iteration within the string is ")"
        7. If yes, increment closePara
        8. If closePara is greater than openPara, return false
9. return comparison of openPara and closePara || <---- Should evaluate true/false and return one of those values
*/

function parensValid(str){
    var openPara = 0;
    var closePara = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] == ')'){ //check to see if the value at our iteration within the string is ")"
            if (closePara > openPara){ //checks to see if we have closing parantheses before a corresponding opening paranthesis
                return false; //early exit if above statement is true
            }
            closePara++; //If yes, increment closePara
        }
        if (str[i] == '('){ //check to see if the value at our iteration within the string is "("
            openPara++; //If yes, increment openPara
        }
    }
    return openPara == closePara; //Should evaluate true/false and return one of those values
}




console.log(parensValid(str1))
console.log(parensValid(str2))
console.log(parensValid(str3))
console.log(parensValid(str4))
console.log(parensValid(str5))
console.log(parensValid(str6))