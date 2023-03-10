/* 
Zip Arrays into Map
Given two arrays, create an associative array and return it (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.
Associative arrays are sometimes called maps because a key (string) maps to a value 
 */

const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];
const expected5 = {
    abc: 42,
    3: "wassup",
    yo: true,
};

const keys2 = [];
const vals2 = [];
const expected6 = {};

const keys3 = ['name', 'number', 'type', 'evolves_from']
const vals3 = ['Gyarados', 130, 'water/flying', 'Magikarp']
const expected7 = {
    name: 'Gyarados',
    number: 130,
    type: 'water/flying',
    evolves_from: 'Magikarp'
}

  // RIOT   Read Input Output Talk


  // 1. Driver 🚗
  // 2. Presenter 👩‍💻
  // 3. Navigator 🧭

  // take 5-7 mins to write the pseudocode here:



  // create the function and decide what params it needs and what it will return
function zipArray(keys, values){
    dict = {};
    for (var i = 0; i < keys.length; i++){
        dict[keys[i]] = values[i]
    }
    return dict
}

console.log(zipArray(keys1, vals1))
console.log(zipArray(keys2, vals2))
console.log(zipArray(keys3, vals3))