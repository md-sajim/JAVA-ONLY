//writ a function find your big name frind
const frindName = ["sajim", "abudullah", "ahmaty"]
function bigName(name) {
    let larghtName = name[0]
    for (let i = 0; i <= name.length - 1; i++) {
        if (name[i].length > larghtName.length) {
            larghtName = name[i]
        }

    }
    console.log(larghtName)

}
bigName(frindName)
// writ a functio find your smoll name frind.
function smollName(name) {
    let somllName1 = name[0];
    for (let i = 0; i <= name.length - 1; i++) {
        if (somllName1.length > name[i].length) {
            somllName1 = name[i]
        }
    }
    console.log(somllName1)
}
smollName(frindName)