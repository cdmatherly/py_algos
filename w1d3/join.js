/* 
  Given an arr and a separator string, output a string of every item in the array separated by the separator.
  
  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-7 mins to write the pseudocode here:

/* 
create function that accepts array and separator as arguments
create temp variable empty string
if arr.length == 0 return new string
loop over the array
    push one item in string
    check if separator is needed
        add the separator
    return temp

*/
// create the function and decide what params it needs and what it will return
function joinString(arr, sep){
    var str = ""
    if (arr.length === 0){
        return str;
    }
    for (var i = 0; i < arr.length; i++){
        str += arr[i];
        if (i == arr.length-1){
            break;
        }
        str += sep;
    }
    return str;
}

console.log(joinString(arr1, separator1))
console.log(joinString(arr2, separator2))
console.log(joinString(arr3, separator3))
console.log(joinString(arr4, separator4))
console.log(joinString(arr5, separator5))