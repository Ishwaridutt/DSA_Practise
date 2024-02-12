






// approach 1: use set but will loose sorting so sort it
// - time complexity  = O(N) O(M) + O(N + M)log(N + M)
// - space complexity = O(N + M) used by set


// approach 2: merge 2 sorted array and then remove duplicates
// - time complexity  = O(N + M) + O(N + M)
// - space complexity = O(N + M) used by extra merged array


// approach 3: modify merge logic
// - time complexity  = O(N + M)
// - space complexity = O(1) 



function bruteForceSolution(arr1, arr2) {
    let mergedArray = [];
    const uniqueSet = new Set();
    for(let index = 0; index < arr1.length; index++) {
        uniqueSet.add(arr1[index]);
    }
    for(let index = 0; index < arr2.length; index++) {
        uniqueSet.add(arr2[index]);
    }

    mergedArray = [...uniqueSet];
    mergedArray.sort((a, b) => a - b);
    console.log('bruteForceSolution mergedArray:', mergedArray);
    return mergedArray;
}


function betterSolution(arr1, arr2) {
    const mergedArray = [];
    // merge 2 sorted array
    let pointer1 = 0;
    let pointer2 = 0;
    let index = 0;
    while(pointer1 < arr1.length && pointer2 < arr2.length) {
        if(arr1[pointer1] < arr2[pointer2]){
            mergedArray[index] = arr1[pointer1]
            pointer1++;
        } else {
            mergedArray[index] = arr2[pointer2]
            pointer2++;
        }
        index++;
    }
    while(pointer1 < arr1.length) {
        mergedArray[index] = arr1[pointer1]
        pointer1++;
        index++;
    }
    while(pointer2 < arr2.length) {
        mergedArray[index] = arr2[pointer2]
        pointer2++;
        index++;
    }

    // remove duplicates
    const uniqueMergedArray = [] // how to calculate length ?
    let pointer3 = 0
    for(let index = 0; index < mergedArray.length; index++) {
        if(mergedArray[index] != mergedArray[index+1]) {
            uniqueMergedArray[pointer3] = mergedArray[index];
            pointer3++;
        }
    }
    console.log('betterSolution uniqueMergedArray:', uniqueMergedArray);
    return uniqueMergedArray;
}


function optimalSolution(arr1, arr2) {
    const mergedArray = [];
    // merge 2 sorted array
    let pointer1 = 0;
    let pointer2 = 0;
    let index = 0;
    while(pointer1 < arr1.length && pointer2 < arr2.length) {
        if(arr1[pointer1] < arr2[pointer2]) {
            if(index == 0 || mergedArray[index - 1] != arr1[pointer1]) {
                mergedArray[index] = arr1[pointer1];
                index++;
            }
            pointer1++;
        } else {
            if(index == 0 || mergedArray[index - 1] != arr2[pointer2]) {
                mergedArray[index] = arr2[pointer2];
                index++;
            }
            pointer2++;
        }
    }
    while(pointer1 < arr1.length) {
        if(index == 0 || mergedArray[index - 1] != arr1[pointer1]) {
            mergedArray[index] = arr1[pointer1]
            index++;
        }
        pointer1++;
    }
    while(pointer2 < arr2.length) {
        if(index == 0 || mergedArray[index - 1] != arr2[pointer2]) {
            mergedArray[index] = arr2[pointer2];
            index++;
        }
        pointer2++;
    }
    return mergedArray;
}




let input1 = [0, 1, 1, 2, 3, 4, 6, 6, 20, 23, 23, 24]
let input2 = [0, 1, 5, 8, 10, 12, 16]

// let ans = bruteForceSolution(input);
bruteForceSolution(input1, input2);
betterSolution(input1, input2);
let ans = optimalSolution(input1, input2);
console.log(ans);













