//writ a function sum in the object product price.
const product = [
    { name: "shoe", price: 500 },
    { name: "shoe", price: 500 },
    { name: "shoe", price: 500 },
    { name: "shoe", price: 500 },
    { name: "shoe", price: 500 },
    { name: "shoe", price: 500 },
    { name: "shoe", price: 500 }
]
function sumProPrice(product) {
    let sum = 0;
    for (let i = 0; i <= product.length - 1; i++) {
        sum = sum + product[i].price
    }
    return sum;
}
const totalPric = sumProPrice(product)
console.log(totalPric)
//write a function multiplay in the object product price and quontaty
const productQunentaty = [
    { name: "shoe", price: 500, quantity: 5 },
    { name: "shoe", price: 500, quantity: 5 },
    { name: "shoe", price: 500, quantity: 5 },
    { name: "shoe", price: 500, quantity: 5 },
    { name: "shoe", price: 500, quantity: 5 },
    { name: "shoe", price: 500, quantity: 5 }
]
function multiplayQuantity(product) {
    sum = 0;
    for (let i = 0; i <= product.length - 1; i++) {
        sum = sum + product[i].price * product[i].quantity
    }
    console.log(sum)
}
multiplayQuantity(productQunentaty)