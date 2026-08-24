/* Second Largest - Find and return the second largest number in an array
   using single-pass iteration (O(n) time complexity) */

console.log('*************Second Largest******************');
function findSecondLargest(arr: number[]): number | null {
    // 1. Ignore empty / missing input
    if (!arr) return null;

    // count length manually
    let len = 0;
    for (; arr[len] !== undefined; len++) { /* count items */ }

    // 2. need at least 2 elements to have a second largest
    if (len < 2) return null;

    // 3. initialize first and second largest
    let first = arr[0];
    let second: number | null = null;

    // 4. single pass - track top two values
    for (let i = 1; i < len; i++) {
        if (arr[i] > first) {
            // current element becomes new largest
            // old largest becomes second largest
            second = first;
            first = arr[i];
        } else if (arr[i] < first) {
            // current is not largest, but might be second
            if (second === null || arr[i] > second) {
                second = arr[i];
            }
        }
        // if arr[i] === first, skip it (we want distinct second largest)
    }

    return second;
}

console.log(findSecondLargest([3, 1, 4, 1, 5, 9, 2, 6]));   // 6
console.log(findSecondLargest([10, 20, 30, 40, 50]));       // 40
console.log(findSecondLargest([-5, -2, -10, -1]));          // -2
console.log(findSecondLargest([7, 7, 7]));                  // null (all same, no distinct second)
console.log(findSecondLargest([5, 10]));                    // 5
console.log(findSecondLargest([10, 5]));                    // 5
console.log(findSecondLargest([1]));                        // null (not enough elements)

/**************************************************************************************/

/* Remove Second Largest - Find and remove the second largest number from an array
   Returns a new array without the first occurrence of the second largest value */

console.log('*************Remove Second Largest******************');
function removeSecondLargest(arr: number[]): number[] {
    // 1. Ignore empty / missing input
    if (!arr) return [];

    // count length manually
    let len = 0;
    for (; arr[len] !== undefined; len++) { /* count items */ }

    // 2. need at least 2 elements to have a second largest
    if (len < 2) return [...arr];   // return copy, nothing to remove

    // 3. find first and second largest with their indices
    let first = arr[0];
    let firstIndex = 0;
    let second: number | null = null;
    let secondIndex = -1;

    for (let i = 1; i < len; i++) {
        if (arr[i] > first) {
            // current becomes new largest
            // old largest becomes second largest
            second = first;
            secondIndex = firstIndex;
            first = arr[i];
            firstIndex = i;
        } else if (arr[i] < first) {
            // might be second largest
            if (second === null || arr[i] > second) {
                second = arr[i];
                secondIndex = i;
            }
        }
        // if arr[i] === first, skip (want distinct second)
    }

    // 4. if no second largest found, return copy of original
    if (secondIndex === -1) {
        const copy: number[] = [];
        for (let i = 0; i < len; i++) {
            copy[i] = arr[i];
        }
        return copy;
    }

    // 5. build new array without the second largest element
    const result: number[] = [];
    let resultLen = 0;

    for (let i = 0; i < len; i++) {
        if (i !== secondIndex) {
            result[resultLen] = arr[i];
            resultLen++;
        }
    }

    return result;
}

console.log(removeSecondLargest([3, 1, 4, 1, 5, 9, 2, 6]));   // [3,1,4,1,5,9,2] (6 removed)
console.log(removeSecondLargest([10, 20, 30, 40, 50]));       // [10,20,30,50] (40 removed)
console.log(removeSecondLargest([-5, -2, -10, -1]));          // [-5,-10,-1] (-2 removed)
console.log(removeSecondLargest([7, 7, 7]));                  // [7,7,7] (no distinct second)
console.log(removeSecondLargest([5, 10]));                    // [10] (5 removed)
console.log(removeSecondLargest([1]));                        // [1] (not enough elements)

/**************************************************************************************/
