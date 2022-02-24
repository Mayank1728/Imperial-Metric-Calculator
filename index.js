const inputVal = document.getElementById("value");
const inFeet = document.getElementById("to-feet");
const inGallons = document.getElementById("to-gallons");
const inPounds = document.getElementById("to-pounds");
const inMeters = document.getElementById("to-meters");
const inLiters = document.getElementById("to-liters");
const inKgs = document.getElementById("to-kg");

let num = 0;
let feet = 0, pounds = 0, gallons = 0;
let meters = 0, liters = 0, kgs = 0;

inputVal.addEventListener("keyup", function() {

    // so that we have new value as soon as the user presses another key
    num = inputVal.value

    // show the num value in each span
    const spans = document.getElementsByClassName("num");
    for(element of spans) {
        element.textContent = num;
    }

    //for converting user-input to feet, gallons, and pounds
    feet = (num * 3.280839).toPrecision(5);
    gallons = (num * 0.2641).toPrecision(5);
    pounds = (num * 2.20462).toPrecision(5);
    inFeet.textContent = feet;
    inGallons.textContent = gallons;
    inPounds.textContent = pounds;

    //for converting user-input to meters, liters, and kgs
    meters = (num * 0.3042).toPrecision(5);
    liters = (num * 3.78541).toPrecision(5);
    kgs    = (num * 0.453592).toPrecision(5);
    inMeters.textContent = meters;
    inLiters.textContent = liters;
    inKgs.textContent = kgs;
    

})



