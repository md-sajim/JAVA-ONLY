function sumOodNumber(numbers) {
    // console.log(numbers)
    let sum = 0
    let sumEvenNumber = 0;
    let sumOddNumber = 0;
    for (let i = 0; i <= numbers.length - 1; i++) {
        if (numbers[i] % 2 === 1) {
            sumEvenNumber = sumEvenNumber + numbers[i]
        }
        else {
            sumOddNumber = sumOddNumber + numbers[i]
        }
        sum = sum + numbers[i]



    }
    // console.log(sum)
    // console.log(sumEvenNumber)
    // console.log(sumOddNumber)
    // *********
    // {JavaScript doesn't support functions that return multiple values.You can use multipul value must use object or array}  
    // **********
    // return ["sum:", sum, "sumOddNumber:", sumOddNumber, "sumEvenNumber:", sumEvenNumber];
    return {
        "sum": sum,
        "sumEvenNumber": sumEvenNumber,
        "sumOddNumber": sumOddNumber
    }

}
const arrayNumber = [211, 232, 520, 751, 541, 555, 212, 501, 1036, 103, 77, 54]
const sumNumber = sumOodNumber(arrayNumber)
console.log(sumNumber)