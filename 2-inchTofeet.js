// ==============================================
//                   Inch to Feet
// ==============================================


// by function

// we use function to do the same work in same pattern again and again.


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



var dadiInches = 144;
var feet = dadiInches / 12; // feet........ [only write feet. (not add let)]
console.log(feet);

/* declaring variable for feet by "var" console will run smoothly but
by "let" there you could get error. 

[you do not declare let again. just change the value. No need to add "let"] 

*/


// naniInches

var naniInches = 156;
var feet = inchToFeet(naniInches);
console.log('Nani Inches in feet', feet)


// nanaInches
var nanaInches = 168;
var feet = inchToFeet(nanaInches);
console.log('Nana Inches in feet', feet);







// ==============================================
//                   Miles to Km
// ==============================================

// miles to km

function mileTokilometer(miles) {
    var km = miles * 1.60934;
    return km;
}

var marathon = mileTokilometer(26.2);
console.log('marathon in km: ', marathon);




