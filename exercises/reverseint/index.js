// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    var numString = n.toString();

    var resultString = "";

    if (numString[0] == "-") {
        numString = numString.substring(1,numString.length);
        resultString += "-"
    }

    var index = 0
    while(index < numString.length){
        if (numString[numString.length-1-index] != 0) {
            resultString += numString[numString.length-1-index]
        }
        index++;
    }
    return Number(resultString);
}

module.exports = reverseInt;
