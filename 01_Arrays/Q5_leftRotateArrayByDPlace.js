// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// link: https://leetcode.com/problems/rotate-array/description/


// find, edge cases based on the constraints 
// => 0 <= k <= 10^5
// => 
// => 

// test cases
// input = [1, 2, 3, 7, 8, 10]  k = 3   =>  [7, 8, 10, 1, 2, 3]
// input = [1, 2, 3, 7, 8, 10]  k = 9   =>  [7, 8, 10, 1, 2, 3]
// input = [1, 2, 3, 7, 8, 10]  k = 10  =>  [8, 10, 1, 2, 3, 7]
// input = [1, 2, 3, 7, 8, 10]  k = 12  =>  [1, 2, 3, 7, 8, 10]



// Brute Approach left
// - create a temp array
// - calculate effective movement by mod of k
// - copy first effective element into an temp array
// - after efective length, then rotate/shift the element to the left by calculating the updated/rotated index
// - then copy back the elements from the temp array into arr after N - K + index
// - time complexity  = O(N) + O(N) + O(N) = O(3N)
// - space complexity = O(N)


// Optimal Approach left : 
// - reverse the whole array
// - reverse the first N - k elements
// - reverse the remaining N - k + 1 elements
// - time complexity  = O(N) + O(N) + O(N) = O(3N)
// - space complexity = O(1) since we only modifying input array


// 
function bruteForceSolutionRotateLeft(arr, k) {
    let tempArr = [];
    let effectiveShift = k % arr.length;

    if(effectiveShift == 0) {
        return arr;
    }
    for(let index = 0; index < effectiveShift ; index++) {
        tempArr[index] = arr[index];
    }
    for(let index = effectiveShift; index < arr.length ; index++) {
        // left rotate
        let updatedIndex = (index - effectiveShift) % arr.length;
        arr[updatedIndex] = arr[index] 
    }
    for(let index = 0; index < effectiveShift ; index++) {
        arr[arr.length - effectiveShift + index] = tempArr[index];
    }

    // console.log(arr);
    return arr;
}

function bruteForceSolutionRotateRight(arr, k) {
    let tempArr = [];
    let effectiveShift = k % arr.length;

    if(effectiveShift == 0) {
        return arr;
    }
    // store n-d till n-1 elements
    for(let index = arr.length - effectiveShift; index < arr.length ; index++) {
        // tempArr[index - (n-d)]
        tempArr.push(arr[index]);
    }
    for(let index = arr.length - 1 - effectiveShift; index >= 0 ; index--) {
        // right rotate
        let updatedIndex = (index + effectiveShift) % arr.length;
        arr[updatedIndex] = arr[index];
    }
    for(let index = 0; index < effectiveShift ; index++) {
        arr[index] = tempArr[index];
    }
    return arr;
}


function optimalSolutionRotateRight(arr, k) {
    const effectiveShift = k % arr.length;
    if(effectiveShift == 0) {
        return arr;
    }
    // reverse whole array
    reverseArray(arr, 0, arr.length - 1);
    // reverse first k elements
    reverseArray(arr, 0, effectiveShift - 1);
    // reverse remaining elements
    reverseArray(arr, effectiveShift, arr.length - 1);
    return arr;
}

function optimalSolutionRotateLeft(arr, k) {
    const effectiveShift = k % arr.length;
    if(effectiveShift == 0) {
        return arr;
    }
    // reverse whole array
    reverseArray(arr, 0, arr.length - 1);
    // reverse first 
    reverseArray(arr, 0, arr.length - 1 - effectiveShift);
    // reverse remaining elements
    reverseArray(arr, arr.length - 1 - effectiveShift + 1, arr.length - 1);
    return arr;
}


function reverseArray(arr, start, end) {
    let temp = null;
    while(end > start) {
        // swap
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}


let input = [[1, 2, 3, 7, 8, 10], 2 ]
// let input = [[1, 2, 3, 7, 8, 10], 9 ]
// let input = [[1, 2, 3, 7, 8, 10], 12 ]
// let input = [[-1,-100,3,99], 2 ]

// let ans = bruteForceSolutionRotateRight(input[0], input[1]);
// let ans = optimalSolutionRotateRight(input[0], input[1]);
let ans = optimalSolutionRotateLeft(input[0], input[1]);
// let ans = optimalSolution(input);
console.log(ans);





