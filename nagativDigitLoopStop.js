//writ a function, loop in array, find a nagitive loop stop
const array = [15, -20, 49, 25, 30, 40, -20, -4, -3, 20, 40]
function stopNagative(num) {
    const array1 = []
    for (let i = 0; i <= num.length - 1; i++) {
        if (array[i] >= 0) {
            array1.push(array[i])
        }
        else {
            break
        }
    }
    return (array1)
}
const positiveNumber = stopNagative(array)
console.log(positiveNumber)