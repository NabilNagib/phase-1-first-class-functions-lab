// Code your solution in this file!

const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
function returnFirstTwoDrivers() {
  return drivers.slice(0, 2);
}
console.log(returnFirstTwoDrivers());


function returnLastTwoDrivers() {
  return drivers.slice(2, 4);
}
console.log(returnLastTwoDrivers());


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers[0]());
console.log(selectingDrivers[1]());


function createFareMultiplier(multiplier) {
        return function(amount) {
            return amount * multiplier;
}
}
const fareMultiplier = createFareMultiplier(2);
const fareQuintupler = createFareMultiplier(5);
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
console.log(fareMultiplier(20));
console.log(fareQuintupler(10));
console.log(fareDoubler(10));
console.log(fareTripler(12));


function selectDifferentDrivers(drivers, selection) {
    switch (selection) {
        case returnFirstTwoDrivers:
            return drivers.slice(0, 2);
        default:
            return drivers.slice(2, 4);
    }
}