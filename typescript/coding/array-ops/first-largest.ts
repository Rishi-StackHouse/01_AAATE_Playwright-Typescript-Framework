/* First Largest - Find and return the largest (maximum) number in an array
   using simple iteration without built-in Math.max() */

console.log('*************First Largest******************');
function findFirstLargest(arr: number[]): number | null {
    // 1. Ignore empty / missing input
    if (!arr) return null;

    // count length manually
    let len = 0;
    for (; arr[len] !== undefined; len++) { /* count items */ }

    // 2. handle edge case of empty array
    if (len === 0) return null;

    // 3. assume the first element is the largest
    let largest = arr[0];

    // 4. compare with every other element
    for (let i = 1; i < len; i++) {
        if (arr[i] > largest) {
            largest = arr[i];   // found a bigger one, update largest
        }
    }

    return largest;
}

console.log(findFirstLargest([3, 1, 4, 1, 5, 9, 2, 6]));   // 9
console.log(findFirstLargest([10, 20, 30, 40, 50]));       // 50
console.log(findFirstLargest([-5, -2, -10, -1]));          // -1 (largest among negatives)
console.log(findFirstLargest([7]));                        // 7 (single element)
console.log(findFirstLargest([5, 5, 5, 5]));               // 5 (all same)
console.log(findFirstLargest([]));                         // null (empty array)

/**************************************************************************************/

/* Remove First Largest - Find and remove the largest number from an array
   Returns a new array without the first occurrence of the largest value */

console.log('*************Remove First Largest******************');
function removeFirstLargest(arr: number[]): number[] {
    // 1. Ignore empty / missing input
    if (!arr) return [];

    // count length manually
    let len = 0;
    for (; arr[len] !== undefined; len++) { /* count items */ }

    // 2. handle edge case of empty array
    if (len === 0) return [];

    // 3. first find the largest element
    let largest = arr[0];
    let largestIndex = 0;

    for (let i = 1; i < len; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
            largestIndex = i;   // track the index of largest
        }
    }

    // 4. build new array without the largest element
    const result: number[] = [];
    let resultLen = 0;

    for (let i = 0; i < len; i++) {
        if (i !== largestIndex) {
            result[resultLen] = arr[i];
            resultLen++;
        }
    }

    return result;
}

console.log(removeFirstLargest([3, 1, 4, 1, 5, 9, 2, 6]));   // [3,1,4,1,5,2,6] (9 removed)
console.log(removeFirstLargest([10, 20, 30, 40, 50]));       // [10,20,30,40] (50 removed)
console.log(removeFirstLargest([-5, -2, -10, -1]));          // [-5,-2,-10] (-1 removed)
console.log(removeFirstLargest([7]));                        // [] (single element removed)
console.log(removeFirstLargest([5, 9, 5, 9]));               // [5,5,9] (first 9 removed)
console.log(removeFirstLargest([]));                         // [] (empty array)

/**************************************************************************************/
