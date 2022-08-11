// reverse waya charcter function
function reverseWaya(text) {
    let revText = "";
    for (let i = text.length - 1; i >= 0; i--) {
        revText = revText + text[i]
    }
    return revText
}
const text = "i am sajim"
const reverseText = reverseWaya(text)
console.log("revase charcter type:", reverseText)
//reverse waya worad function 
function reverseWayaWord(text) {
    let splitText = text.split(" ")
    let reversWord = [" "];
    for (let i = splitText.length - 1; i >= 0; i--) {
        reversWord = reversWord + splitText[i] + " "
    }
    return reversWord;

}
const text1 = 'i am a good boy'
const reverseTextWord = reverseWayaWord(text1)
console.log("revase word type formula 1:", reverseTextWord)

//Try to anather sestem reverse waya word 
function reverseWayaWord2(text) {
    let splitText = text.split(" ")
    let reversWord = [];
    for (let i = splitText.length - 1; i >= 0; i--) {
        reversWord.push(splitText[i])

    }
    const reverseJoin = reversWord.join(" ")
    return reverseJoin;


}
const text2 = 'this gay vary good singer'
const reverseTextWord2 = reverseWayaWord2(text2)
console.log("revers word type furmula 2:", reverseTextWord2)