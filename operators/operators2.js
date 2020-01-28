// Default values with || operator

function User (name, age) {
    this.name = name || 'John Doe'
    this.age = age || 18
}

const user1 = new User()
console.log(user1.name, user1.age)

const user2 = new User ('David', 12)
console.log(user2.name, user2.age)