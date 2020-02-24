const primeTable = require('./primeTable.json');
const charMap = require('./charMap.json');

function getPrime(letter, index){
    let letterCode = letter.charCodeAt(0) - "a".charCodeAt(0);
    var pIndex = Math.floor(letterCode*Math.log(index))
    return primeTable[pIndex]
}


function generatePassword(key, length){
    var primeHash = 1, i=1, pass = '';
    [...key].forEach((c) => {
        primeHash = primeHash*getPrime(c, i)
        i++;
    })
    for(i=91; i<100;i++){
        charMap[i]=key.charAt(i-92)
    }
    console.log(charMap[06])
    if(Math.log10(primeHash) >= length*2){
        for(i=0; i<2*length; i+=2){
            var str = (primeHash % 10).toString()
            primeHash /= 10;
            str += (primeHash % 10).toString()
            str = parseInt(str)
            pass = pass + charMap[str]
        }
        console.log("Your Password is "+ pass)
    }
    else{
        console.log("Enter a smaller length/longer key")
    }
}

generatePassword(process.argv[2], process.argv[3])