// wright a sum finction
function sumNumber(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum = sum + i
    }
    return sum;
}
let totalSum = sumNumber(10)
console.log(totalSum)
// wright a factorial function 
function multiple(number) {
    let multi = 1;
    for (let i = 1; i <= number; i++) {
        multi = multi * i;
    }
    return multi;
}
const factorial = multiple(10)
console.log(factorial)
// wright a factorial function revarse way
function multiple2(number) {
    let multi = 1;
    for (let i = number; i >= 1; i--) {
        multi = multi * i
    }
    return multi;
}
const factorial2 = multiple2(10)
console.log(factorial2)
// wright a factorial function use wihle loop
function multiple3(number) {
    let multi = 1;
    let i = number
    while (i >= 1) {
        multi = multi * i
        i--
    }
    return multi;
}
const whileFactorial = multiple3(10)
console.log(whileFactorial)