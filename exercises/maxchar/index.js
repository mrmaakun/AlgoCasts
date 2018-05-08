// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    const charMap = {};

    for (char of str){
        if (charMap[char]){
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    var maxCharKey;
    var maxCharValue = 0;

    for (key in charMap){
        if (charMap[key] > maxCharValue){
            maxCharValue = charMap[key];
            maxCharKey = key;
        }
    }

    return maxCharKey;
}

module.exports = maxChar;
