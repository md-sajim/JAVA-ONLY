//writh a function give multi-layer-discounts
// 1 to100 product rate 100 tatk
// 101 to 200 product rate 90 tatk
// 200 ++ product rate 70 tatk
function discounts(quentity) {
    const fist100 = 100;
    const second100 = 90;
    const towHandadPlus = 70
    if (typeof quentity !== 'number') {
        const alart = "Give a valid number"
        return alart
    }
    else if (quentity <= 100) {
        return totalprice = quentity * fist100;
    }
    else if (quentity <= 200) {
        const fist100minus = quentity - 100;
        return secondQuentity = fist100minus * second100 + 100 * fist100;
    }
    else {
        const restQuentity = quentity - 200;
        return colculat100 = 100 * fist100 + 100 * second100 + restQuentity * towHandadPlus;


    }
}
const totalDiscount = discounts(300);
console.log(totalDiscount)
