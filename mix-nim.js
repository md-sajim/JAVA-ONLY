//1.write a function that will take 2 parameters and will return the min Number.
function minNumber(num1, num2, num3) {
    const minNumber = Math.min(num1, num2, num3);
    return minNumber;

}
const minNumber1 = minNumber(60, 70, 80)
console.log('Use Math.min defint mun number:', minNumber1)
//2.write a function that will take 3 parameters and will return the max Number
function maxNumber(num1, num2, num3) {
    const maxNumber = Math.max(num1, num2, num3)
    return maxNumber;
}
const maxNumber1 = maxNumber(100, 50, 120)
console.log("Use Math.max defint max number:", maxNumber1)
//3. write a anather function that will take a array and will return the max Number
function arrayMax(number) {
    let maxArray = [0]
    for (let i = 0; i <= number.length - 1; i++) {
        if (number[i] > maxArray) {
            maxArray = number[i]
        }
    }

    return maxArray;
}
const ifArrayMax = arrayMax([101, 202, 303, 123, 232])
console.log('Use if condition defint Max number:', ifArrayMax)
//4.writh a function to find min number in array
function arrayMin(number) {// finctiona array asaca
    let arrayLangth = number.length //array ar length ke value a raka hoyca.
    let minNumberArray = number[arrayLangth - 1]//defolt value array ar length thaka -1 use kora last index ka dora hoyaca
    for (let i = 0; i <= arrayLangth - 1; i++) {
        if (minNumberArray > number[i]) {
            minNumberArray = number[i]
        }
    }
    console.log("chack the minNumber:", minNumberArray)
}
arrayMin([220, 50, 30])
//5.anather way find max number in array
function arrayMax3(number) {
    const maxArray3 = Math.max(...number)
    return maxArray3
}
const maxArray3 = arrayMax3([50, 60, 59, 66, 120, 500, 550])
console.log("Use Math.max(...number):", maxArray3)
//find min nimber
function arrayMin3(number) {
    const minArray3 = Math.min(...number)
    return minArray3
}
const minArray3 = arrayMin3([20, 50, 44, 11, 101])
console.log('Use Mat.min(...number):', minArray3)
//////////////////////////////////////////////////////
function MyMin(myarr) {
    var al = myarr.length;
    minimum = myarr[al - 1];
    while (al--) {
        if (myarr[al] < minimum) {
            minimum = myarr[al]
        }
    }
    return minimum;
};
var myArray = [1, 5, 6, 2, 3];
var m = MyMin(myArray);
console.log(m)