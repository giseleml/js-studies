const connected = true

const login = (test) => {
    console.log(test)
}

/* This conditional can be shortened using a combination of a variable (which will be verified)
    and a function using the && operator */

if (connected) {
    login("If condition here!");
}

connected && login("This is shorter!")