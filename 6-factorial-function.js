// Regular System

let factorial = 1;

for (let i = 1; i <= 5; i++) {
    factorial = factorial * i;
}

console.log(factorial);



// Function System

function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    // console.log(factorial); [It can be done here]
    return factorial;
}


// input

const myFact = 5;
const myFactorial = getFactorial(myFact);
console.log('My factorial is:', myFactorial);


var firstFactorial = getFactorial(7);
console.log('Factorial of 7 is', firstFactorial);


var secondFactorial = getFactorial(9);
console.log('Factorial of 9 is', secondFactorial);





