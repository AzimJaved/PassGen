const primeTable = require('./primeTable.json');
const charMap = require('./charMap.json');

function getPrime(letter, index){
    let letterCode = letter.charCodeAt(0) - "a".charCodeAt(0);
    var pIndex = Math.floor(letterCode*Math.log(index))
    return primeTable[pIndex]
}


exports.generatePassword = (key, length) => {
    var primeHash = 1, i=1, pass = '';
    [...key].forEach((c) => {
        primeHash = primeHash*getPrime(c, i)
        i++;
    })
    primeHash = primeHash.toString()
    for(i=0; i<2*length; i+=2){
        var str = parseInt(primeHash.charAt(i) + primeHash.charAt(i+1))
        pass = pass + charMap[str]
    }
    console.log("Your Password is "+ pass)
}