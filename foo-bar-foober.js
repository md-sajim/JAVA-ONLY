//writ a function 1 to 50 number
// 3 modulas foo
// 5 modulas bar
// 3 and 5 modulas foobar
function foobar(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("foobar")
        }
        else if (i % 3 === 0) {
            console.log('foo')
        }
        else if (i % 5 === 0) {
            console.log('bar')
        }
        else {
            console.log(i)
        }
    }
}
foobar(50)
