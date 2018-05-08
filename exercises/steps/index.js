// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


function steps(n) {
    drawStep(n, n);
}

function drawStep(currentRow, maxRow){
    var stepString = "";
    if (currentRow > 0){
        for (var i = 0; i < maxRow; i++){
            if (i < currentRow) {
                stepString += "#";
            } else {
                stepString += " ";
            }
        }
        drawStep(currentRow-1, maxRow);
        console.log(stepString);
    }
}

/*
function steps(n) {
    for(var i = 1; i <= n; i++){
        var row = "";
        for(var j = 1; j <= n; j++){
            if (j <= i){
                row += "#";
            } else {
                row += " ";
            }
        }
        console.log(row);
    }
}
*/
module.exports = steps;
