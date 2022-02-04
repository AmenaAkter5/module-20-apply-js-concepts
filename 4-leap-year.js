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


/* 
It is not right code to get leap year. There need to fulfill more 
conditions to get leap year.


Normally we can say which year number is divisible by 4 that year is 
leap year but all divisible year is not leap year so there have another
conditions to get leap year.


*** Leap Year three Conditions -

condition-1: Year nuber need to be divisible by 4.
condition-2: Year nuber need to not be divisible by 100.
condition-3: Year nuber need to be divisible by 400.

*/

// without return statement

function checkLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year'); // output: show this
    }
}

// input

const isMyYearLeapYear = checkLeapYear(myYear);


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






/* 

// Right Method

Example 1: Check Leap Year Using if...else

// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = prompt('Enter a year:');

checkLeapYear(year);

Output

Enter a year: 2000
2000 is a leap year

// End the Program

[In the above program, the three conditions are checked to determine if the year is a leap year or not.

The % operator returns the remainder of the division.]

*/



/* 

// Advanced Method:

Example 2: Check Leap Year Using newDate()

// program to check leap year
function checkLeapYear(year) {

    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = prompt('Enter a year:');

checkLeapYear(year);

Output

Enter a year: 2000
2000 is a leap year

// End of the program

[In the above program, the month of February is checked if it contains 29 days.

If a month of February contains 29 days, it will be a leap year.

The new Date(2000, 1, 29) gives the date and time according to the specified arguments.

Tue Feb 29 2000 00:00:00 GMT+0545 (+0545)

The getDate() method returns the day of the month.]

*/