/*
Balance Index
Here, a balance point is ON an index, not between indices.
Return the balance index where sums are equal on either side
(exclude its own value).

Return -1 if none exist.
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

const nums3 = [1, 1, 0, 2];
const expected3 = 2;



// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:
// create a function 

function balancedIndex(arr){
    var total = 0
    for (var i = 0; i < arr.length; i++){ //goes through array and adds up every value
        total += arr[i]
    }
    // console.log(total)
    var sumLeft = 0

    for (var j = 0; j < arr.length; j++){
        total -= arr[j] //subtracts current value from total
        if(sumLeft == total){ //checks both sides of idx
            return j; //returns current idx if both sides equal
        }
        sumLeft += arr[j] //subtract current value from left total before next iteration
    }
    return -1 //returns -1 if conditions aren't met
}
console.log(balancedIndex([1, 2, 5, 3]));
console.log(balancedIndex(nums1));
console.log(balancedIndex(nums2));
console.log(balancedIndex(nums3));