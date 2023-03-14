/* 
Given an array of strings
return the number of times each string occurs (a frequency / hash table)
*/
//                       v
const arr1 = ["a", "a", "a"];
const expected1 = {
    a: 3,
};

const arr2 = ["a", "b", "a", "c", "Bob", "c", "c", "d"];
const expected2 = {
    a: 2,
    b: 1,
    c: 3,
    Bob: 1,
    d: 1,
};

const arr3 = [];
const expected3 = {};

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// 1. Create a function that accepts an array.
// 2. Create an empty object.
// 3.Loop over given array.
//         4.Within the loop we can check if given value within array is a key in the object.
//          5.If is a key increment the value by 1.
//          6.If it is not a key make a key witrh value of 1.
// 7. Return the object.

function makeTable(arr){
    var map = {};
    for (var i = 0; i < arr.length; i++){
        if (map.hasOwnProperty(arr[i])){
            map[arr[i]]++
        }
        else {
            map[arr[i]] = 1
        }
    }
    return map
}

console.log(makeTable(arr1))
console.log(makeTable(arr2))
console.log(makeTable(arr3))