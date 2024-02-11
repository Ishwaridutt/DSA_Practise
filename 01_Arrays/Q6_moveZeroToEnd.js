// Given an integer array nums, move all 0's to the end of it 
// while maintaining the relative order of the non-zero elements.

// link: https://leetcode.com/problems/move-zeroes/description/


// find, edge cases based on the constraints 
// => 

// test cases
// input = [0, 0 ,0 , 0, 0]
// input = [1, 2, 3, 7, 8, 10]
// input = [0, 1 ,0 , 0, 0]
// input = [1, 2, 0, 3, 0, 5, 10, 0, 12]



// Brute Approach
// - create an temp array
// - iterate the original array and keep pushing each non zero element into temp array
// - now you have sequence, iterate again the original array
// - and copy the temp array into the original array and mark remaining element to zero
// - time complexity  = O(N) + O(N) = O(2N)
// - space complexity = O(N)


// Optimal Approach : 2 pointer approach
// - initiate 2 pointer => one on index 0 and other on index 1
// - compare elements present on those pointers
//  - if item matches then move the second pointer 1 more step
//  - if item does not match then its a unique element and move 1st pointer here and and 2nd pointer 1 step
// - time complexity  = O(N)
// - space complexity = O(1) since we only modifying input array


// 
function bruteForceSolution(arr) {
    const nonZeroItemsArr = [];
    for(let index = 0; index < arr.length; index++) {
        if(arr[index] != 0) {
            nonZeroItemsArr.push(arr[index])
        }
    }

    for(let index = 0; index < arr.length; index++) {
        if(index < nonZeroItemsArr.length) {
            arr[index] = nonZeroItemsArr[index]
        } else {
            arr[index] = 0
        }
    }
    return arr
}

// 
// function optimalSolution(arr) {
//     let pointer1 = 0;
//     let pointer2 = 1;
//     while(pointer1 < arr.length && pointer2 < arr.length) {
//         let currElem = arr[pointer1];
//         if(currElem == 0) {
//             if(arr[pointer2] != 0) {
//                 // swap
//                 let temp = arr[pointer1]
//                 arr[pointer1] = arr[pointer2]
//                 arr[pointer2] = temp
//                 // update the pointer
//                 pointer1++;
//                 pointer2 = pointer1 + 1;
//             } else {
//                 // move 2nd pointer
//                 pointer2++;
//             }
//         } else {
//             pointer1++;
//             pointer2++;
//         }
//     }
//     return arr;
// }

function optimalSolution(arr) {
    let pointer1 = 0;
    let pointer2 = 1;
    while(pointer2 < arr.length) {
        if(arr[pointer1] != 0) {
            pointer1++;
        } else if(arr[pointer2] != 0) {
            // swap
            let temp = arr[pointer1]
            arr[pointer1] = arr[pointer2]
            arr[pointer2] = temp
            pointer1++
        }
        pointer2++;
    }
    return arr;
}

// move the non zero element to the correct position with pointer1
// do not update the pointer1
// update the pointer2
function optimalSolution2(arr) {
    let pointer1 = 0;
    let pointer2 = 0;
    while(pointer2 < arr.length) {
        if(arr[pointer2] != 0) {
            // correcting the position
            arr[pointer1] = arr[pointer2];
            pointer1++;
        }
        pointer2++;
    }
    while(pointer1 < arr.length) {
        arr[pointer1] = 0;
    }
    return arr;
}


// let input = [1, 2, 3, 7, 8, 10]
// let input = [1, 2, 3, 3, 7, 7, 8, 8, 8, 10, 12]
// let input = [1, 1, 1, 1]
// let input = [1]
// let input = [1, 2, 0, 3, 0, 5, 12, 0, 10, 0, 0, 1]
// let input = [1, 1 ,1 ,1, 1, 1]
let input = [1, 0,1]

// let ans = bruteForceSolution(input);
let ans = optimalSolution(input);
console.log(ans);





