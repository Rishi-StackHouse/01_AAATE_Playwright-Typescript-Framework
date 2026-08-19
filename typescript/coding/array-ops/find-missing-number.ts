/* Find Missing Number - Given an array of numbers from 1 to N with exactly one
   number missing, find and return that missing number */

console.log('*************Find Missing Number******************');
function findMissingNumber(arr: number[]): number {
    // 1. Ignore empty / missing input
    if (!arr) return -1;

    // count length manually
    let len = 0;
    for (; arr[len] !== undefined; len++) { /* count items */ }

    // 2. the full range is 1..N, where N = len + 1 (because one number is missing)
    const n = len + 1;

    // 3. add up what the sum SHOULD be for 1 + 2 + ... + n
    let expectedSum = 0;
    for (let i = 1; i <= n; i++) {
        expectedSum = expectedSum + i;
    }

    // 4. add up what the array ACTUALLY contains
    let actualSum = 0;
    for (let i = 0; i < len; i++) {
        actualSum = actualSum + arr[i];
    }

    // 5. the difference is the missing number
    return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5, 6]));        // 3
console.log(findMissingNumber([2, 3, 4, 5]));           // 1
console.log(findMissingNumber([1, 2, 3, 4]));           // 5
console.log(findMissingNumber([1, 3]));                 // 2
console.log(findMissingNumber([6,7,8,10])); 

/**************************************************************************************/
