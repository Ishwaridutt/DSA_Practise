//  check if the array was originally sorted in non-decreasing order

// find, edge cases based on the constraints 
// array can have duplicates

// test cases
// input = [1, 2, 3, 7, 8, 10]
// input = [1, 2, 3, 3, 7, 7, 8, 8, 8, 10]
// input = [1, 2, 5, 4, 1]


// Approach => 
// traverse the array and compare prev elem to curr elem and check if curr elem is greater than prev elem
// time complexity => O(N)
function optimalSolution(arr) {
    for(let index = 1; index < arr.length; index++) {
        if(arr[index] >= arr[index - 1]) {
            // do nothing
        }
        else {
            return false;
        }
        
    }
    return true;
}


// let input = [1, 2, 3, 7, 8, 10]
// let input = [1, 2, 3, 3, 7, 7, 8, 8, 8, 10]
let input = [1, 2, 5, 4, 1]
let ans = optimalSolution(input);
console.log(ans);



