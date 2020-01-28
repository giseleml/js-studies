// Spread operator as parameter


function sum (...values) {
    // Uncomment bellow to make it calculate the values received

    /* 
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }

    console.log(sum)
    */
    console.log(values)
}

sum(1)
sum(1, 2)
sum(1, 2, 3)
sum(1, 2, 3, 4)
sum(1, 2, 3, 4, 5)


