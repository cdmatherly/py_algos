/* 
Given a SORTED array of integers, dedupe the array 
Because array elements are already in order, all duplicate values will be grouped together.
Ok to use a new array
Bonus: do it in O(n) time (no nested loops, new array ok)
Bonus: Do it in-place (no new array)
Bonus: Do it in-place in O(n) time and no new array
Bonus: Keep it O(n) time even if it is not sorted
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected4 = [1];

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:


// create the function and decide what params it needs and what it will return
function dedupe(arr) {
    var map = {}
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (!map.hasOwnProperty(arr[i])) {
            map[arr[i]] = i
            newArr.push(arr[i])
        }
    }
    return newArr;
}
// ==========================OR==================================== //
function dedupe(arr) {
    var newArr = [arr[0]]
    for(var i = 1; i <arr.length; i++){
        if(arr[i] == arr[i-1]){
            continue
        }
        newArr.push(arr[i])
    }
    return newArr
}

console.log(dedupe(nums1))
console.log(dedupe(nums2))
console.log(dedupe(nums3))
console.log(dedupe(nums4))