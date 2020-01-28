// To Loop Through All Elements and Get an new modified array

const names = ['Gerard', 'Frank', 'Mikey', 'Ray']

const upperCaseNames = names.map(name => name.toUpperCase())

console.log(upperCaseNames)

//REMEMBER: If you’re using map, you cannot break or continue or return while looping
// For that use every or some