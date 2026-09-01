// Third Largest - Find and return the third largest number in an array

console.log('*************Third Largest******************');
function findThirdLargest(arr: number[]): number | null {

    /* 1. count length of array manually, since iteration needed for finding the third largest element
          if its < 3 return null (not a proper array) */
    let len = 0;
    for (; arr[len] !== undefined; len++) {}
    if (len < 3) return null;

    // 2. assume the first element is the largest, second and third as null (unknown yet)
    let first = arr[0];
    let second: number | null = null;
    let third: number | null = null;

    /* 3. compare with every other element with the assumed ones
          if its greater than first, demote first to second, second to third, and update first
          else if its less than first but greater than second, demote second to third and update second
          else if its less than second but greater than third, update third */
    for (let i = 1; i < len; i++) {
        if (arr[i] > first) {
            third = second;
            second = first;
            first = arr[i];
        } 
        else if (arr[i] < first) {
            if (second === null || arr[i] > second) {
                third = second;
                second = arr[i];
            } 
            else if (arr[i] < second) {
                if (third === null || arr[i] > third) {
                    third = arr[i];
                }
            }
        }
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

// Remove Third Largest - Find and remove the third largest number from an array

console.log('*************Remove Third Largest******************');
function removeThirdLargest(arr: number[]): number[] {

    /* 1. count length of array manually, since iteration needed for finding the third largest element
          if its < 3 return original array (nothing to remove) */
    let len = 0;
    for (; arr[len] !== undefined; len++) {}
    if (len < 3) return arr;

    // 2. assume the first element is the largest and track indices for removal
    let first = arr[0];
    let firstIndex = 0;
    let second: number | null = null;
    let secondIndex = -1;
    let third: number | null = null;
    let thirdIndex = -1;

    /* 3. compare with every other element with the assumed ones
          if its greater than first, demote first to second, second to third (with indices) and update first
          else if its less than first but greater than second, demote second to third and update second
          else if its less than second but greater than third, update third and its index */
    for (let i = 1; i < len; i++) {
        if (arr[i] > first) {
            third = second;
            thirdIndex = secondIndex;
            second = first;
            secondIndex = firstIndex;
            first = arr[i];
            firstIndex = i;
        } 
        else if (arr[i] < first) {
            if (second === null || arr[i] > second) {
                third = second;
                thirdIndex = secondIndex;
                second = arr[i];
                secondIndex = i;
            } 
            else if (arr[i] < second) {
                if (third === null || arr[i] > third) {
                    third = arr[i];
                    thirdIndex = i;
                }
            }
        }
    }

    // 4. if no third largest found (all elements are same), return copy of original array
    if (thirdIndex === -1) {
        const copy: number[] = [];
        for (let i = 0; i < len; i++) {
            copy[i] = arr[i];
        }
        return copy;
    }

    /* 5. build a new array and set an iterator, iterate through the original array and
          copy all elements to the new array except the one at thirdIndex, return the result */
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
