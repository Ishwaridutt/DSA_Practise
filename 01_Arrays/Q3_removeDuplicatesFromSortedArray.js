// Given an integer array nums sorted in non-decreasing order, 
// remove the duplicates in-place such that each unique element appears only once.

// link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/


// find, edge cases based on the constraints 
// => there can be 1 type of element in whole array [1, 1, 1, 1]
// => there can be 2 type of element in whole array [1, 1, 2, 2]
// => there can be 1 element in whole array [1]

// test cases
// input = [1, 2, 3, 7, 8, 10]
// input = [1, 2, 3, 3, 7, 7, 8, 8, 8, 10]
// input = [1]
// input = [1, 1, 1, 1]
// input = [1, 1, 2, 2]


// Brute Approach
// - create a set and push whole array into it
// - convert set into array and sort it
// - update the input array
// - time complexity  = O(N) + O(N) + O(NlogN) + O(N) = O(3N) + O(NlogN) = O(NlogN)
// - space complexity = O(N) + O(N) = O(2N) = O(N)


// Optimal Approach : 2 pointer approach
// - initiate 2 pointer => one on index 0 and other on index 1
// - compare elements present on those pointers
//  - if item matches then move the second pointer 1 more step
//  - if item does not match then its a unique element and move 1st pointer here and and 2nd pointer 1 step
// - time complexity  = O(N)
// - space complexity = O(1) since we only modifying input array


// took 52MB as per leetcode
function bruteForceSolution(arr) {
    const uniqueItemSet = new Set();
    for(let index = 0; index < arr.length; index++) {
        uniqueItemSet.add(arr[index]);
    }
    // convert set into array and sort it
    // const uniqueItemArr = Array.from(uniqueItemSet); // new Array(uniqueItemSet);
    const uniqueItemArr = [...uniqueItemSet]
    uniqueItemArr.sort((a, b) => a > b);

    // update the input array
    for(let index = 0; index < uniqueItemArr.length; index++) {
        arr[index] = uniqueItemArr[index];
    }
    return uniqueItemArr.length;
}

// took 51.88MB as per leetcode
function optimalSolution(arr) {
    let uniqueElementCount = 1;
    let pointer1 = 0;
    let pointer2 = 1;
    // while(pointer1 < arr.length && pointer2 < arr.length) {
    //     if(arr[pointer1] == arr[pointer2]) {
    //         // non unique element
    //         pointer2++;
    //     } else if(arr[pointer1] != arr[pointer2]) {
    //         // unique element
    //         uniqueElementCount++;
    //         arr[pointer1 + 1] = arr[pointer2];
    //         pointer1++;
    //         pointer2++;
    //     }
    //     pointer2++;
    // }
    // reduced above logic to this
    while(pointer1 < arr.length && pointer2 < arr.length) {
        if(arr[pointer1] != arr[pointer2]) {
             // unique element
             uniqueElementCount++;
             arr[pointer1 + 1] = arr[pointer2];
             pointer1++;
         }
         pointer2++;
     }
    return uniqueElementCount;
}


// let input = [1, 2, 3, 7, 8, 10]
// let input = [1, 2, 3, 3, 7, 7, 8, 8, 8, 10, 12]
// let input = [1, 1, 1, 1]
// let input = [1]
let input = [1, 1, 2, 2]

// let ans = bruteForceSolution(input);
let ans = optimalSolution(input);
console.log(ans);





