// Combining multiple objects with spread operator

const obj1 = { name: 'John', lastName: 'Doe'}
const obj2 = { address: 'Park Avenue', number: 222}
const obj3 = { country: 'USA'}

const objCombined = {...obj1, obj2, obj3}

console.log(objCombined)

// REMEMBER: Updating any value of obj1, obj2, or obj3 will not affect the values of objCombined