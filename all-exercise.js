// Inch To Feet


// 1.

// function


function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

// function call

// myInches

var myInches = 132;
var feet = inchToFeet(myInches);
console.log('My inches in feet', feet);


var myInches = 132;
var feet = myInches / 12; // let feet .............
console.log(feet);


// dadiInches

var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log('Dadi Inches in feet', feet);


// naniInches

var naniInches = 156;
var feet = inchToFeet(naniInches);
console.log('Nani Inches in feet', feet)


// nanaInches
var nanaInches = 168;
var feet = inchToFeet(nanaInches);
console.log('Nana Inches in feet', feet);





// 2.

// mile to km

function mileTokilometer(miles) {
    var km = miles * 1.60934;
    return km;
}

var marathon = mileTokilometer(26.2);
console.log('marathon in km: ', marathon);







// Check odd - even number


// 3.

// Normal System

var num = 4;
var remainder = num % 2;
console.log(remainder == 0); // output: true


// 4.

// Function system

// Even Function

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

// myNumber

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






// 5.

// Leap - Year

// Normal System:

function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    return false;
}

const myYear = 2087;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('Is My Year Leap Year:', isMyYearLeapYear);

// yourYear

const yourYear = 2224;
const yourYearIsLeapYear = isLeapYear(yourYear);
console.log('Is your Year Leap Year:', yourYearIsLeapYear);

// hisYear

const hisYear = 2100;
const hisYearIsLeapYear = isLeapYear(hisYear);
console.log('Is His Year Leap Year:', hisYearIsLeapYear);

// here this result is true but this year is not leap year mainly.



// with return statement

function checkLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log(year + ' is a leap year');
        return true;
    } else {
        console.log(year + ' is not a leap year'); // output: show this
    }
    return false; // output: show this
}

// input

const isMyYearLeapYear = checkLeapYear(myYear);
console.log('Is my Year Leap Year', isMyYearLeapYear);






// 6.

// factorial

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



// decrementing

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






// =====================================
//            Module Practice
// =====================================


/* 
১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year
নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year 
না হলে false রিটার্ন করবে।
*/


function leapYear(year) {
    if (year % 4 == 0, year % 100 != 0, year % 400 == 0) {
        return true;
    }
    return false;
}

// input:

var myYear = 2023;
const isLeapYear = leapYear(myYear);
console.log('Is my Year Leap Year:', isLeapYear);


// output:

// Is my Year Leap Year: false



/* 
২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই
ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন 
true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।
*/

function checkEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

// input

var myAge = 25;

var isMyAgeEven = checkEven(myAge);
console.log('Is My Age Even:', isMyAgeEven);


// output

// Is My Age Even: false



/* 
৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে 
দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।
*/


function hourToMinute(hour) {
    var minute = hour * 60;
    return minute;
}

var getMinute = hourToMinute(5);
console.log(getMinute);



// reverse

function minuteToHour(minute) {
    var hour = minute / 60;
    return hour
}

var getHour = minuteToHour(300);
console.log(getHour);