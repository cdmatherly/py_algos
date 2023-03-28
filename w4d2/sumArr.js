/* 
Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;


function sumArr(nums, x = 0) {
    if(x <= nums.length-1){
        // console.log(x)
        return nums[x] + sumArr(nums, x+1)
    }
    return 0
}

console.log(sumArr(nums1))
console.log(sumArr(nums2))
console.log(sumArr(nums3))