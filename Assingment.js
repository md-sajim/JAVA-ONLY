//1.
function radianToDegree(radian) {
    if (typeof radian !== "number") {
        return wringing = "Please give me valid number"//wirnging condition
    }
    else {
        return degree = parseFloat((radian * 57.2958).toFixed(2));// radian to defree
    }
}
//2.
function isJavaScriptFile(fill) {
    if (typeof fill !== "string") {
        return wringing = "please give me a valid fill name"//wirnging condition
    }
    else {
        return fill.endsWith(".js");//find the .js fill
    }
}
//3.
function oilPrice(diesel, petrol, oktane) {
    if (diesel < 0 || petrol < 0 || oktane < 0) {
        return wrining = "please give the positive number"//wirnging condition
    }
    else if (typeof diesel !== "number" || typeof petrol !== "number" || typeof oktane !== "number") {
        return wrining = "please give a valid number of 1 to 9"//wirnging condition
    }
    else {

        return totalAmount = diesel * 114 + petrol * 130 + oktane * 135;//quantity * price;
    }
}

//4.
function publicBusFare(picnikPepol) {
    if (picnikPepol < 0) {
        return wrining = "please give the positive number"//wirnging condition
    }
    else if (typeof picnikPepol !== "number") {
        return wringing = "please give a valid number 1 to 9"//wirnging condition
    }
    else {
        const bus = picnikPepol % 50;
        const micre = bus % 11;
        return publicBusCostAmoust = micre * 250;//rested public cost
    }

}
//5.
function isBestFriend(bestFriend, bestFriend1) {
    if (typeof bestFriend !== "object" || typeof bestFriend1 !== "object") { //wirnging condition
        return wringing = "please give object onle,and must use (name and friend) property"
    }
    else if (typeof bestFriend.name !== 'string' || typeof bestFriend.friend !== 'string' || typeof bestFriend1.name !== 'string' || typeof bestFriend1.friend !== 'string') { //wirngig condition
        return wringing = "Please name and friedn property only use string type value"
    }
    else if (bestFriend.name === bestFriend1.friend && bestFriend1.name === bestFriend.friend) { //find the best friend must use name and friend property
        return true;
    }
    else {
        return false;
    }

}

