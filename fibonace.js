//[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]
//0+1=1,1+1=2,
//writ a function returen fibonacci result
function fibonacci(number) {
    let defultfibo = [0, 1]
    let array = [];
    for (let i = 2; i <= number; i++) {
        defultfibo[i] = defultfibo[i - 1] + defultfibo[i - 2]
        // array.push(defultfibo[i])
    }
    return defultfibo;
}
const mathFibonacci = fibonacci(50)
console.log(mathFibonacci)