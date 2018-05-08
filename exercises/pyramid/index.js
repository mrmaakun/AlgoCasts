// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
// pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

/*

1 = 1x1
2 = 2x3
3 = 3x5
4 = 4x7
5 = 5x9

*/

pyramid(1);

function pyramid(n) {
    var columns = n*2-1;

    for(var row = 0; row < n; row++){
        var outputString = "";
        var midpoint = Math.floor(columns/2);
        for(var col = 0; col < columns; col++){
            if(col <= (midpoint + row) && col >= (midpoint - row)){
                outputString += "#";
            } else {
                outputString += " ";
            }
        }
        console.log(outputString);
    } 
}

module.exports = pyramid;
