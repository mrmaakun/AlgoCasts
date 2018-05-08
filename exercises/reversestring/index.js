// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    /*
    var reversedString = "";
    for (i = 0; i < str.length; i++){
        reversedString += str.charAt(str.length-1-i);
    }
    console.log(reversedString);
    return reversedString;
    */

    arr = str.split('')
    return arr.reverse().join('');
}

module.exports = reverse;