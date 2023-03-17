/* 
Given an array of objects / dictionaries to represent new inventory,
and an array of objects / dictionaries to represent current inventory,
update the quantities of the current inventory

if the item doesn't exist in current inventory, add it to the inventory
remturn the current inventory after updating it.
*/

const newInv1 = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
];
const currInv1 = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
];

const expected1 = [
    { name: "Peanut Butter", quantity: 70 },
    { name: "Grain of Rice", quantity: 9001 },
    { name: "Royal Jelly", quantity: 20 },
];

const newInv2 = [];
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
const expected2 = [{ name: "Peanut Butter", quantity: 20 }];

const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
const currInv3 = [];
const expected3 = [{ name: "Peanut Butter", quantity: 20 }];




// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:
/* 
Create function that accepts two arrays as arguments
    check if new inventory array is empty
        return current inventory array
    create a new empty array variable
    create a for loop that goes over the array
        create a for loop that goes over the second array
                if the name[value] are the same between arrays,
                    update quantity value
*/


// create the function and decide what params it needs and what it will return
function updateInv(arr1, arr2){

    for(var i = 0; i < arr1.length; i++){
        var flag = false
        for (var j = 0; j < arr2.length; j++){
            if (arr1[i]['name'] == arr2[j]['name']){
                flag = true
                arr2[j]['quantity'] += arr1[i]['quantity'];
                break;
            }
            // else{
                // }
            }
            if (flag === false){
                arr2.push(arr1[i])
        }
    }
    // console.log(arr2)
    return arr2
}

console.log('Case 1:', updateInv(newInv1, currInv1))
console.log('Case 2:', updateInv(newInv2, currInv2))
console.log('Case 3:', updateInv(newInv3, currInv3))