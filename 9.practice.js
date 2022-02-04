// =====================================
//            Module Practice
// =====================================


/* 
প্রাকটিস চ্যালেঞ্জ-৩ টা: 

১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year
নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year 
না হলে false রিটার্ন করবে।

 

২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই
ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন 
true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।

 

৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে 
দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে।
*/

// ========================================

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




