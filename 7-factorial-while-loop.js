// while-loop: Incrementing


function getFactorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

var myFactorial = getFactorial(6);
console.log('My Factorial is', myFactorial);





// while-loop: Decrementing

// Here we decrease the value of i. so initial value of i = number.

function getFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

var hisFactorial = getFactorial(6);
console.log('His Factorial is', hisFactorial);


// for loop decrementing

function getFactorial2(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}

var herFactorial = getFactorial2(5);
console.log('Her Factorial is', herFactorial);