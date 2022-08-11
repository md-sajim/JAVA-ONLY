function leapYear(year) {
    var year;
    if (0 == year % 4 && 0 != year % 100 || 0 == year % 400) {
        return true;
    }
    return false;
}

const findLeapYear = leapYear(2000)
console.log(findLeapYear)