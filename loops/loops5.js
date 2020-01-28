// To Check Whether Every Element in an Array Meets a Condition

const num = [1, 2, 3, 4, 7540, 489, 0, 351, 210, 56, -45]

const isZeroFree = num.every(num => num === 0)

!isZeroFree && console.log('there\'s a zero in the array!')