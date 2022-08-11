
//ince to convart feet mathode
function feetConvert(incee) {
    const feet = incee / 12;
    acutarFeet = parseFloat(feet.toFixed(3))
    return acutarFeet;
}

const sajimHight = 77;
const sajimfeet = feetConvert(sajimHight)
// console.log(sajimfeet)
//feet to convart ince mathode
function inceconvert(feet) {
    const inic = feet * 12;
    return inic
}

const sajimHight2 = 7
const sajimInic = inceconvert(sajimHight2)
// console.log('sajiminic:', sajimInic)
// miles to kilometer convert
function milesToKelo(miles) {
    const kelomiter = miles * 1.609344.toFixed(3)
    return kelomiter;
}
const miles = 50;
const totlaKelometer = milesToKelo(miles)
console.log(totlaKelometer)
//Kilometer to miles convert
function kelomiterToMilse(kelomiter) {
    const milse = parseFloat((kelomiter / 1.69344).toFixed(3))
    return milse;

}
const kelomiter = 50;
const totalMiles = kelomiterToMilse(kelomiter)
console.log(totalMiles)
//Menits to hours convart
function menitToHours(menits) {
    const hour = menits / 60
    return hour;
}
const menits = 12000;
const hours = menitToHours(menits)
console.log("Hours", hours)
//input menits out put day
function hourToDay(hour) {
    const day = parseInt((hour / 24).toFixed());
    return day;
}
const totalDay = hourToDay(hours)
console.log("Day:", totalDay)