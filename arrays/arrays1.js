// Inserting values in between an array with splice 

const arr1 = [0, 1, 2, 3, 5, 6, 7]

// Inserting the integer 4 at index 4 of the array: 

//arr.splice(index, itemsToDelete, item1ToAdd, item2ToAdd, ...)
arr1.splice(4, 0, 4)

console.log(arr1)

//REMEMBER: Using splice will mutate the original array, not create a new one