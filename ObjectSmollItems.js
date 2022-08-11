// writ a function to find a smoll items in object in array
const productArray = [
    { name: "samsong", Ram: "4gb", price: 20000, color: "selver" },
    { name: "samsong", Ram: "4gb", price: 22000, color: "selver" },
    { name: "samsong", Ram: "4gb", price: 24000, color: "selver" },
    { name: "samsong", Ram: "4gb", price: 16000, color: "selver" }
]
function arrayObject(phone) {
    let chapest = phone[0]
    console.log(chapest)
    for (let i = 0; i <= phone.length - 1; i++) {
        if (chapest.price > phone[i].price) {
            chapest = phone[i]
        }
    }
    return chapest;
}
const chapestPhone = arrayObject(productArray)
console.log(chapestPhone)