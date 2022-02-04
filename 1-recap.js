// Variable

var time = '10:15pm'; // string
var bookPrice = 200; // number / numeric
var isWhiteColor = false; // boolean



// variable - let / const [variable declaration Format]

// let - value of variable could change

let price = 27;
price = 29;
price = 32;

// const - value of the variable will not change

const sonName = 'Abrar Fahad';
const daughterName = 'Zarin Subah';





// array

var partners = ['mona', 'yeasin', 'zarin', 'fahad', 'elu'];

// element Count

console.log(partners.length);

var elementCount = partners.length;
console.log(elementCount);

// zarin position

console.log(partners.indexOf('zarin'));

var zarinIndex = partners.indexOf('zarin');
console.log(zarinIndex);

// add last element

partners.push('ashu');

// remove last element

partners.pop();

/* 
1. Array's index is starting from 0. Then it will be increase 
chronologically.

2. Not existing elements position / index is -1.

*/



// conditionals

if (bookPrice < 120) {
    console.log('I will buy this book');
}

else {
    console.log('I will buy jhalmuri');
}



// loop

// while

var i = 0;

while (i <= 10) {
    // do some work
    i++;
}

// for

for (var i = 0; i <= 10; i++) {
    // do some work
}







// function

/* 

// function format

function function-name(input[can be more one and separated by comma]){
    return output
}

*/

function isMoonUp(time) {
    if (time >= 19 && time <= 5) {
        return true;
    }
    return false;
}

var moonStatus = isMoonUp(22);
console.log('Chand Utheche ki?', moonStatus);




