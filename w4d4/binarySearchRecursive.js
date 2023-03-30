/*
  Recursive Binary Search

  Input: SORTED array of ints, int value
  Output: bool representing if value is found

  Recursively search to find if the value exists, do not loop over every element.

  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

//                   V
const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

//                   V
const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// don't be afraid to add parameters!

// base case(s)
// logic
// recursive call(s) / return(s)

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:


// create the function and decide what params it needs and what it will return

function binaryRecursive(arr, target, low = 0, high = arr.length-1){
    var mid = Math.floor((low+high)/2)
    if (arr[mid] === target){
        // console.log(arr[high], arr[mid], arr[low])
        return true
    } 
    if (low > high){
        // console.log(arr[high], arr[mid], arr[low])
        return false
    }
    // console.log(arr[high], arr[mid], arr[low])
    if (arr[mid] > target){
        high = mid-1
        return binaryRecursive(arr, target, low, high)
    }
    else if (arr[mid] < target){
        low = mid+1
        return binaryRecursive(arr, target, low, high)
    }
}

console.log(binaryRecursive(nums1, searchNum1))
console.log(binaryRecursive(nums2, searchNum2))
console.log(binaryRecursive(nums3, searchNum3))