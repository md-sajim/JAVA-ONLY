//write a function,give shopkeeper 1000taka,buy apple 400 taka, and orang 300 taka, who mouch shopkeeper return.
function shoping(apple = 0, orang = 0, amount = 0) {
    if (apple < 0 || orang < 0 || amount < 0) {
        return wrining = "please give the positive number"
    }
    else if (typeof apple !== "number" || typeof orang !== "number" || typeof amount !== "number") {
        return wrining = "pelase give a valid number of 1.......9"
    }
    else {
        const applePrice = apple * 300;
        const orangPrice = orang * 400;
        const totalPrice = applePrice + orangPrice
        const colculatMoney = amount - totalPrice
        if (colculatMoney == 0) {
            return returnArlat = 'upnar pora taka sas'
        }
        if (colculatMoney < 0) {
            return returnArlat = 'upner aro: ' + Math.abs(colculatMoney) + ' taka lagva'
        }
        else {
            return returnArlat = 'upne pavan: ' + colculatMoney + " Taka"
        }

    }
}
const shopingPrice = shoping(1, 1, 100);
console.log(shopingPrice)