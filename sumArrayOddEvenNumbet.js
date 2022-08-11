//creat a function,this function creat Number push the array
function creatNumber() {
    let creataArray = [];

    for (let i = 100; i <= 130; i++) {
        creataArray.push(i)
    }
    // console.log(creataArray)
    return creataArray;
}
creatNumber()




//find oddNumber in array and create array in function and push oddNumber.
function oddNumber(number) {
    let array = [];
    for (let i = 0; i <= number.length - 1; i++) {
        if (number[i] % 2 === 1) {
            array.push(number[i])
        }
    }
    return array;

}
const oddArray = oddNumber(creatNumber())
//find EvenNumber in array and create array in function and push oddNumber.
function EvenNumber(number) {
    let array = [];
    for (let i = 0; i <= number.length - 1; i++) {
        if (number[i] % 2 === 0) {
            array.push(number[i])
        }
    }
    return array;

}
const evenArray = EvenNumber(creatNumber())





//sumArrya function 
function sumArray(array) {
    let sum = 0;
    for (let i = 0; i <= array.length - 1; i++) {
        sum = sum + array[i]
    }
    return sum;
}
let totalSumEven = sumArray(evenArray)
let totalSumOdd = sumArray(oddArray)
console.log(totalSumEven)
console.log(totalSumOdd)