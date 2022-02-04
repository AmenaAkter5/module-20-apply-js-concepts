// Normal System

var num = 4;
var remainder = num % 2;
console.log(remainder == 0); // output: true



// Function system

// Even Function

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

const myNumber = 145;
const myNumberIsEven = isEven(myNumber);
console.log('is my Number Even:', myNumberIsEven);


// herNumber

const herNumber = 1892;
const isHerNumberEven = isEven(herNumber);
console.log('Is her Number Even:', isHerNumberEven);


// odd Function

function isOdd(number) {
    if (number % 2 == 1) { // or, if (number % 2 != 0)
        return true;
    }
    return false;
}

// myNumber

const isMyNumberOdd = isOdd(myNumber);
console.log('Is My Number Odd:', isMyNumberOdd);

// herNumber

const isHerNumberOdd = isOdd(herNumber);
console.log('Is Her Number Odd:', isHerNumberOdd);