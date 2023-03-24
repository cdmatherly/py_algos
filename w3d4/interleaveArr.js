/* 
Given two arrays, interleave them into one new array.
The arrays may be different lengths. The extra items should be added to the
back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:


// create the function and decide what params it needs and what it will return
function interleaveArr(arr1, arr2) {
    var newArr = []
    if (arr1.length > arr2.length) { //find the longest array
        var endlength = arr1.length
    }
    else {
        var endlength = arr2.length
    }
    for (var i = 0; i < endlength; i++) {
        if (arr1[i] != undefined) { //as long as there is a value, push it into the new array
            newArr.push(arr1[i])
        }
        if (arr2[i] != undefined) {
            newArr.push(arr2[i])
        }
    }
    return newArr;
}
console.log(interleaveArr(arrA1, arrB1))
console.log(interleaveArr(arrA2, arrB2))
console.log(interleaveArr(arrA3, arrB3))
console.log(interleaveArr(arrA4, arrB4))