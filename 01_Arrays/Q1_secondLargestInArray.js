// Find Second Largest and Smallest Element in Array

// find, edge cases based on the constraints 
// => there can be duplicates [1, 2, 2, 3, 3]
// => array can contain only similar element [7, 7, 7]
// => array can contain only 2 type of element [1, 2, 2, 2]

// Brute
// => sort the array and from the last iterate to find 2nd largest
// => complexity = O(NlogN) + O(N)

// Better
// => find the largest element
// => iterate again to find the 2nd largest element
// => complexity = O(N) + O(N) = O(2N) = O(N)

// Optimal
// => find largest and 2nd largest together
// => assume current elem is largest when you find any element greater make second largest = largest elem 
// => complexity = O(N)



// 2nd largest
function bruteForceSolution(arr) {
    arr.sort((a, b) => a > b );
    console.log(arr);
    // iterate backward to find the 2nd largest
    for(let i = arr.length - 1; i >= 0 ; i--) {
        if(arr[i] < arr[i + 1]) {
            return arr[i];
        }
    }
}

function betterSolution(arr) {
    let largestElement = arr[0];
    // how many time will it iterate ?
    // b - (a-1) => N - 1 - (0 - 1) => N 
    for(let index = 0; index < arr.length ; index++) {
        if(arr[index] > largestElement) {
            largestElement = arr[index];
        }
    }

    let secondLargest = Number.MIN_SAFE_INTEGER;
    for(let index = 0; index < arr.length ; index++) {
        if(arr[index] > secondLargest && arr[index] < largestElement) {
            secondLargest = arr[index];
        }
    }
    return secondLargest;
}

function optimalSolution(arr) {
    let largestElement = arr[0];
    let secondLargest =  Number.MIN_SAFE_INTEGER;
    for(let index = 0; index < arr.length; index++) {
        if(arr[index] > largestElement) {
            secondLargest = largestElement;
            largestElement = arr[index];
        }
        if(arr[index] > secondLargest && largestElement > arr[index]) {
            secondLargest = arr[index];
        }
    }
    return secondLargest;
}


let input = [ 3, 4, 5, 3, 6, 7, 7, 8, 9, 3, 8, 5, 4, 9, 9, 12, 10 ]

// let ans = bruteForceSolution(input);
// let ans = betterSolution(input);
let ans = optimalSolution(input);
console.log(ans);




