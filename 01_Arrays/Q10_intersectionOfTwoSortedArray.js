

// approach 1: iterate 1st array and linear search each element in another array
// - time complexity  = O(N * N)
// - space complexity = O(1) since we only modifying input array

// approach 2: use hasmap to maintain frequency and reiterate again and decide if it is common or not
// - time complexity  = O(N)
// - space complexity = O(N) used by hashmap

// approach 3: two pointer approach taking adv of sorted array
// - time complexity  = O(N)
// - space complexity = O(1) 


function bruteForceSolution(arr1, arr2) {
    let commonElem = []
    for(let i = 0; i < arr1.length; i++) {
        let doesExists = linearSearch(arr2, arr1[i]);
        if(doesExists != -1) {
            commonElem.push(arr1[i]);
            arr2[doesExists] = Number.MIN_SAFE_INTEGER;
        }
    }
    console.log(commonElem);
    return commonElem;
}

function linearSearch(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == target) {
            return i;
        }
    }
    return -1;
}


function betterSolution(arr1, arr2) {
    let commonElem = [];
    const hm = new Map();
    for(let i = 0; i < arr1.length; i++) {
        if(hm.get(arr1[i])) {
            hm.set(arr1[i], hm.get(arr1[i]) + 1);
        } else {
            hm.set(arr1[i], 1);
        }
    }
    for(let i = 0; i < arr2.length; i++) { 
        if(hm.get(arr2[i])) {
            hm.set(arr2[i], hm.get(arr2[i]) - 1);
            commonElem.push(arr2[i])
        }
    }
    console.log(commonElem);
    return commonElem;
}


function optimalSolution(arr1, arr2) {
    let commonElem = [];
    let pointer1 = 0;
    let pointer2 = 0
    while(pointer1 < arr1.length && pointer2 < arr2.length) {
        if(arr1[pointer1] == arr2[pointer2]) {
            commonElem.push(arr1[pointer1]);
            pointer1++;
            pointer2++
        } else if(arr1[pointer1] < arr2[pointer2]) {
            pointer1++;
        } else {
            pointer2++;
        }
    }
    console.log(commonElem);
    return commonElem;
}




let input1 = [0, 1, 1, 2, 3, 4, 6, 6, 20, 23, 23, 24]
let input2 = [0, 1, 2, 5, 8, 10, 12, 16, 20]

// let ans = bruteForceSolution(input);
// bruteForceSolution(input1, input2);
betterSolution(input1, input2);
let ans = optimalSolution(input1, input2);
// console.log(ans);


