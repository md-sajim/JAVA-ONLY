//writ a function colculat wood who mach you need
function woodCalculat(cherWood, tabaleWood, badeWood) {
    const cherWoodKp = cherWood * 3;
    const tableWoodKp = tabaleWood * 10;
    const badeWoodKp = badeWood * 50;
    const totalWood = cherWoodKp + tableWoodKp + badeWoodKp;
    console.log(totalWood)
}
woodCalculat(1, 1, 1)

//short function
function woodCalculat(cherWood, tabaleWood, badeWood) {
    const totalWood = cherWood * 3 + tabaleWood * 10 + badeWood * 50;
    console.log(totalWood)
}
woodCalculat(1, 1, 1)
