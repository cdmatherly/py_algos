/* 
String: Rotate String
Create a standalone function that accepts a string and an integer,
and rotates the characters in the string to the right by that given
integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";
/*
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:
/*
Create function that accepts a string and a rotate amount
create empty string variable "newStr"
if rotate amount is greater than string.length
    rotate -= string.length
loop through the given string starting at string.length - rotate amount
    concat newStr with rema
*/


// create the function and decide what params it needs and what it will return

function rotateStr(str, rotate){
    var newStr = ''
    if (rotate == 0){
        return str
    }
    if (rotate > str.length){
        rotate -= str.length;
    }
    for (var i = str.length-rotate; i < str.length; i++){
        newStr += str[i];
    }
    for (var j = 0; j < str.length-rotate; j++){
        newStr += str[j];
    }
    return newStr
}

console.log(rotateStr(str, rotateAmnt1))
console.log(rotateStr(str, rotateAmnt2))
console.log(rotateStr(str, rotateAmnt3))
console.log(rotateStr(str, rotateAmnt4))
console.log(rotateStr(str, rotateAmnt5))