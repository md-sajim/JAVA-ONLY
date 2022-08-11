//Use includes() remove duplicat items
const nameArray = ["kamal", "soaibe", "abul", "kabul", "cabul", "dabul", "kamal", "abul", "cabul"]
function duplicat(name) {
    const uniqueName = []
    for (let i = 0; i <= name.length - 1; i++) {

        if (uniqueName.includes(name[i]) === false) {
            uniqueName.push(name[i])
        }

    }
    return uniqueName;
}
const nuiqreNameOrg = duplicat(nameArray)
console.log(nuiqreNameOrg)
//Use indexOf() remove duplicat items
const nameArray1 = ["kamal", "soaibe", "abul", "kabul", "cabul", "dabul", "kamal", "abul", "cabul"]
function duplicat1(name) {
    const uniqueName = []
    for (let i = 0; i <= name.length - 1; i++) {

        if (uniqueName.indexOf(name[i]) === -1) {
            uniqueName.push(name[i])
        }

    }
    return uniqueName;
}
const nuiqreNameOrg1 = duplicat1(nameArray1)
console.log(nuiqreNameOrg1)