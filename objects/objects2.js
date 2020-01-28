// Object destructuring

const user = {
    name: 'Mary',
    age: 37,
    profile: 'marydoe37@bol.com',
    followers: 664646,
    posts: 303
}

const { name, age, profile } = user

console.log(name, age, profile)

// REMEMBER: variables names have to be the same as object keys