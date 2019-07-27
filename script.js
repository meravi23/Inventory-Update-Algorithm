/* 
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
 Update the current existing inventory item quantities (in arr1).
 If an item cannot be found, add the new item and quantity into the inventory array.
 The returned inventory array should be in alphabetical order by item.
*/

function updateInventory(arr1, arr2) {

    var isInArray = false;
    for (var i = 0; i < arr2.length; i++) {
        for (var j = 0; j < arr1.length; j++) {
            if (arr2[i][1] === arr1[j][1]) { // check if item is in array
                isInArray = true;
                if (arr2[i][0] !== arr1[j][0]) { // check if values are the same
                    arr1[j][0] += arr2[i][0]; // if not update quantity
                    arr2.splice(i, 1); // remove item from list
                }
            } else {
                isInArray = false;
            }
        }

        if (!isInArray) { // add item to array if not there
            arr1.push(arr2[i]);
        }
    }

    arr1.sort(function (a, b) {
        if (a[1] < b[1]) {
            return -1;
        }
        if (a[1] > b[1]) {
            return 1;
        }
        return 0;
    });

    console.log(arr1);

    return arr1;
}



// Example inventory lists
let curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

let newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

//should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].

updateInventory([
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
], [])
// should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].

updateInventory([], [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
])
//should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].

updateInventory([
    [0, "Bowling Ball"],
    [0, "Dirty Sock"],
    [0, "Hair Pin"],
    [0, "Microphone"]
], [
    [1, "Hair Pin"],
    [1, "Half-Eaten Apple"],
    [1, "Bowling Ball"],
    [1, "Toothpaste"]
])
// should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]
