// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

console.log(matrix(10));

function matrix(n) {
/*
    var direction = "r";

    var matrixArrays = [];

    for (var i = 0; i < n; i++){
        matrixArrays.push(new Array(n).fill(0));
    }

    var x = 0;
    var y = 0;
    var maxLength = n;

    for (var i = 1; i <= (n*n); i++){

        console.log("x,y: " + x + " " + y + " " + i + " " + n*n);

        matrixArrays[y][x] = i;


        if (direction === "r" &&  (x >= n-1 || matrixArrays[y][x+1])){
            direction = "d";
            y+=1;
        } else if (direction === "d" && (y >= n-1 || matrixArrays[y+1][x] )){
            x = x-1;
            direction = "l";
        } else if (direction === "l" && (x <= 0 || matrixArrays[y][x-1])){
            y = y-1;
            direction = "u";
        } else if (direction === "u" && (y <= 0 || matrixArrays[y-1][x])){
            x = x+1;
            direction = "r";
        } else {
            switch(direction) {
                case "d":
                    y = y+1;
                    break;
                case "u":
                    y = y-1;
                    break;
                case "r":
                    x = x+1;
                    break;
                case "l":
                    x = x-1;
                    break;
                                 
            } 
        }
    }
    
    matrixArrays.forEach(function(element){
        console.log(element);
    });
    return matrixArrays;
}

function hasVisited(point){
    if (point) {
        return true;
    } else {
        return false;
    }
}

*/

    var resultMatrix = [];
    for (var i = 0; i < n; i++){
        resultMatrix.push([]);
    }

    var startColumn = 0;
    var endColumn = n;
    var startRow = 0;
    var endRow = n;
    var count = 1

    while (startColumn <= endColumn && startRow <= endRow){

        for(var pos=startColumn; pos < endColumn; pos++){
            resultMatrix[startRow][pos] = count;
            count++;
        }
        startRow++;

        for(var pos=startRow; pos < endRow; pos++){
            resultMatrix[pos][endColumn-1] = count;
            count++;
        }

        endColumn--;

        for(var pos=endColumn-1; pos >= startColumn; pos--){
            resultMatrix[endRow-1][pos] = count;
            count++;
        }

        endRow--;


        for(var pos=endRow-1; pos >= startRow; pos--){
            resultMatrix[pos][startColumn] = count;
            count++;
        }

        startColumn++;

    }

    return resultMatrix;

}

module.exports = matrix;
