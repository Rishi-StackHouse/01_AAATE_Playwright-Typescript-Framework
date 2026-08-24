/* Third Largest - Find and return the third largest number in an array
   using single-pass iteration (O(n) time complexity) */

console.log('*************Third Largest******************');
function findThirdLargest(arr: number[]): number | null {
    // 1. Ignore empty / missing input
    if (!arr) return null;

    // count length manually
    let len = 0;
    for (; arr[len] !== undefined; len++) { /* count items */ }

    // 2. need at least 3 elements to have a third largest
    if (len < 3) return null;

    // 3. initialize first, second, and third largest
    let first = arr[0];
    let second: number | null = null;
    let third: number | null = null;

    // 4. single pass - track top three values
    for (let i = 1; i < len; i++) {
        if (arr[i] > first) {
            // current element becomes new largest
            // cascade: first -> second -> third
            third = second;
            second = first;
            first = arr[i];
        } else if (arr[i] < first) {
            // might be second or third largest
            if (second === null || arr[i] > second) {
                // becomes new second largest
                third = second;
                second = arr[i];
            } else if (arr[i] < second) {
                // might be third largest
                if (third === null || arr[i] > third) {
                    third = arr[i];
                }
            }
            // if arr[i] === second, skip it (we want distinct values)
        }
        // if arr[i] === first, skip it (we want distinct third largest)
    }

    return third;
}

console.log(findThirdLargest([3, 1, 4, 1, 5, 9, 2, 6]));   // 5
console.log(findThirdLargest([10, 20, 30, 40, 50]));       // 30
console.log(findThirdLargest([-5, -2, -10, -1]));          // -5
console.log(findThirdLargest([7, 7, 7]));                  // null (all same, no distinct third)
console.log(findThirdLargest([5, 10, 15]));                // 5
console.log(findThirdLargest([15, 10, 5]));                // 5
console.log(findThirdLargest([1, 2]));                     // null (not enough elements)
console.log(findThirdLargest([1, 2, 2, 3, 3, 3]));         // 1

/**************************************************************************************/

/* Remove Third Largest - Find and remove the third largest number from an array
   Returns a new array without the first occurrence of the third largest value */

console.log('*************Remove Third Largest******************');
function removeThirdLargest(arr: number[]): number[] {
    // 1. Ignore empty / missing input
    if (!arr) return [];

    // count length manually
    let len = 0;
    for (; arr[len] !== undefined; len++) { /* count items */ }

    // 2. need at least 3 elements to have a third largest
    if (len < 3) {
        const copy: number[] = [];
        for (let i = 0; i < len; i++) {
            copy[i] = arr[i];
        }
        return copy;   // return copy, nothing to remove
    }

    // 3. find first, second, and third largest with their indices
    let first = arr[0];
    let firstIndex = 0;
    let second: number | null = null;
    let secondIndex = -1;
    let third: number | null = null;
    let thirdIndex = -1;

    for (let i = 1; i < len; i++) {
        if (arr[i] > first) {
            // cascade: first -> second -> third
            third = second;
            thirdIndex = secondIndex;
            second = first;
            secondIndex = firstIndex;
            first = arr[i];
            firstIndex = i;
        } else if (arr[i] < first) {
            // might be second or third largest
            if (second === null || arr[i] > second) {
                // becomes new second largest
                third = second;
                thirdIndex = secondIndex;
                second = arr[i];
                secondIndex = i;
            } else if (arr[i] < second) {
                // might be third largest
                if (third === null || arr[i] > third) {
                    third = arr[i];
                    thirdIndex = i;
                }
            }
            // if arr[i] === second, skip (want distinct values)
        }
        // if arr[i] === first, skip (want distinct values)
    }

    // 4. if no third largest found, return copy of original
    if (thirdIndex === -1) {
        const copy: number[] = [];
        for (let i = 0; i < len; i++) {
            copy[i] = arr[i];
        }
        return copy;
    }

    // 5. build new array without the third largest element
    const result: number[] = [];
    let resultLen = 0;

    for (let i = 0; i < len; i++) {
        if (i !== thirdIndex) {
            result[resultLen] = arr[i];
            resultLen++;
        }
    }

    return result;
}

console.log(removeThirdLargest([3, 1, 4, 1, 5, 9, 2, 6]));   // [3,1,4,1,9,2,6] (5 removed)
console.log(removeThirdLargest([10, 20, 30, 40, 50]));       // [10,20,40,50] (30 removed)
console.log(removeThirdLargest([-5, -2, -10, -1]));          // [-2,-10,-1] (-5 removed)
console.log(removeThirdLargest([7, 7, 7]));                  // [7,7,7] (no distinct third)
console.log(removeThirdLargest([5, 10, 15]));                // [10,15] (5 removed)
console.log(removeThirdLargest([1, 2]));                     // [1,2] (not enough elements)
console.log(removeThirdLargest([1, 2, 2, 3, 3, 3]));         // [2,2,3,3,3] (1 removed)

/**************************************************************************************/
