// Better method to merge arrays (without concat)

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

arr1.push.apply(arr1, arr2)

console.log('merged array', arr1)