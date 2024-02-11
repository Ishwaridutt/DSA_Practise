




function solution(arr1, arr2) {
    let mergedArr = [];   // arr1.length + arr2.length
    let pointer1 = 0;
    let pointer2 = 0;
    let i = 0;
    while(pointer1 < arr1.length && pointer2 < arr2.length) {
        if(arr1[pointer1] < arr2[pointer2]) {
            mergedArr[i] = arr1[pointer1];
            pointer1++;
        } else {
            mergedArr[i] = arr2[pointer2];
            pointer2++;
        }
        i++;
    }
    while(pointer1 < arr1.length) {
        mergedArr[i] = arr1[pointer1];
        pointer1++;
        i++;
    }
    while(pointer2 < arr2.length) {
        mergedArr[i] = arr2[pointer2];
        pointer2++;
        i++;
    }
    return mergedArr;
}


let input1 = [1, 1, 2, 3, 4, 20]
let input2 = [0, 1, 5, 8, 10, 12, 16]

// let ans = bruteForceSolution(input);
let ans = solution(input1, input2);
console.log(ans);

