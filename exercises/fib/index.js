// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

console.log(fib(10));



function fib(n) {

/*
    var lastNumber = 0;
    var fibNumber = 1;

    if (n == 0) {
        return n;
    }

    for (var i = 1; i <= n-1; i++){
        var temp = fibNumber;
        fibNumber = fibNumber + lastNumber;
        lastNumber = temp;
    }

    return fibNumber;
*/

    // recursive

    if (n < 2) {
        return n;
    }

    return fib(n-1) + fib(n-2);

}



// iterative solution
//     let result = [0, 1];

//     for (let i = 2; i <= n; i++){
//         result [i] = result[i-1] + result[i-2];
//     }

//     return result[n];
// }



module.exports = fib;
