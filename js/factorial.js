exports.factorial = function(num) {
    let total = 1n
    let bigInt = BigInt(num)
    while (bigInt > 0){
        total *= bigInt
        bigInt --
    }
    console.log(total)
    return Number(total)
};