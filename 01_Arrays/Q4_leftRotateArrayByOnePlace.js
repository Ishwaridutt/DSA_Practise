// Left rotate array by 1 place without using extra space

// link: 


// find, edge cases based on the constraints 


// test cases
// input = [1, 2, 3, 7, 8, 10]
// input = [1, 2, 3, 3, 7, 7, 8, 8, 8, 10]
// input = [1]
// input = [1, 1, 1, 1]
// input = [1, 1, 2, 2]


// Brute Approach
// - save the first element
// - shift each element to left by 1 position
// - update the last element
// - time complexity  = O(N) + O(1) = O(N)
// - space complexity = O(1)


function solution(arr) {
    let temp = arr[0]
    for(let index = 0; index < arr.length -1 ; index++) {
        arr[index] = arr[index+1];
    }
    arr[arr.length - 1] = temp;
    console.log(arr);
}


let input = [1, 2, 3, 7, 8, 10]
// let input = [1, 2, 3, 3, 7, 7, 8, 8, 8, 10, 12]
// let input = [1, 1, 1, 1]
// let input = [1]
// let input = [1, 1, 2, 2]

let ans = solution(input);
console.log(ans);





