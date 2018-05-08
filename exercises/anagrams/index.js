// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    var testStringA = stringA.replace(/[^\w]+/g, "").toLowerCase();
    var testStringB = stringB.replace(/[^\w]+/g, "").toLowerCase();

    if (testStringA.length !== testStringB.length){
        return false;
    }

    var charMapA = buildCharMap(testStringA);

    var charMapB = buildCharMap(testStringB);

    for (var key in charMapA) {
        if (charMapA[key] !== charMapB[key]){
            return false;
        }
    }

    return true;
}

function buildCharMap(string){
    var charMap = {};

    for(var char of string){
        if(!charMap[char]){
            charMap[char] = 1;
        } else {
            charMap[char]++;
        }
    }

    return charMap;
}

module.exports = anagrams;
