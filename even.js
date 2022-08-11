//wright a even
function evenNumber(number) {
    const even = number % 2;
    if (even === 0) {
        console.log("even number")
        return true;
    }
    else {
        console.log("odd number")
        return false
    }

}
const evenNum = 21001
const chack = evenNumber(evenNum)
console.log(chack)