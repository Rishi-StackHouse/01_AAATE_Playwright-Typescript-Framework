// Move Zeros to End - Move all 0s to the end while maintaining order of non-zero elements

console.log('*************Move Zeros to End******************');
function moveZerosToEnd(arr: number[]): number[] {

    // 1. count length manually
    let len = 0;
    for (; arr[len] !== undefined; len++) { /* count items */ }
    if (len < 2) return arr;   // if less than 2 items, nothing to move

    // 2. result array that will hold non-zeros first, then zeros
    const result: number[] = [];
    let resultlen = 0;      // manual counter for non-zero elements
    let zeroCount = 0;      // count how many zeros we encounter

    // 3. first pass: collect all non-zero elements in order
    for (let i = 0; i < len; i++) {
        if (arr[i] !== 0) {
            result[resultlen] = arr[i];   // add non-zero element
            resultlen++;
        } 
        else {
            zeroCount++;                   // count zeros for later
        }
    }

    // 4. second pass: append all zeros at the end
    for (let i = 0; i < zeroCount; i++) {
        result[resultlen] = 0;
        resultlen++;
    }

    return result;
}

console.log(moveZerosToEnd([0, 1, 0, -3, -12]));          // [1, -3, -12, 0, 0]
console.log(moveZerosToEnd([1, 2, 0, 0, 3, 4, 0, 5]));  // [1, 2, 3, 4, 5, 0, 0, 0]
console.log(moveZerosToEnd([0, 0, 0, 1]));              // [1, 0, 0, 0]
console.log(moveZerosToEnd([1, 2, 3]));                 // [1, 2, 3] (no zeros)
console.log(moveZerosToEnd([0, 0, 0]));                 // [0, 0, 0] (all zeros)

/**************************************************************************************/

// Move Zeros to Front - Move all 0s to the front while maintaining order of non-zero elements

console.log('*************Move Zeros to Front******************');
function moveZerosToFront(arr: number[]): number[] {

    // 1. count length manually
    let len = 0;
    for (; arr[len] !== undefined; len++) { /* count items */ }
    if (len < 2) return arr;   // if less than 2 items, nothing to move

    // 2. result array that will hold zeros first, then non-zeros
    const result: number[] = [];
    let zeroCount = 0;      // count how many zeros we encounter

    // 3. first pass: count all zeros
    for (let i = 0; i < len; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        }
    }

    // 4. fill the front with zeros
    for (let i = 0; i < zeroCount; i++) {
        result[i] = 0;
    }

    // 5. second pass: append non-zero elements after zeros (maintaining their order)
    let resultLen = zeroCount;   // start after the zeros
    for (let i = 0; i < len; i++) {
        if (arr[i] !== 0) {
            result[resultLen] = arr[i];   // add non-zero element
            resultLen++;
        }
    }

    return result;
}

console.log(moveZerosToFront([0, 1, 0, 3, 12]));          // [0, 0, 1, 3, 12]
console.log(moveZerosToFront([1, 2, 0, 0, 3, 4, 0, 5]));  // [0, 0, 0, 1, 2, 3, 4, 5]
console.log(moveZerosToFront([0, 0, 0, 1]));              // [0, 0, 0, 1]
console.log(moveZerosToFront([1, 2, 3]));                 // [1, 2, 3] (no zeros)
console.log(moveZerosToFront([0, 0, 0]));                 // [0, 0, 0] (all zeros)

/**************************************************************************************/

// BONUS: In-Place Move Zeros to End (modifies original array - Two Pointer approach)
// This is the classic interview approach that doesn't use extra space

console.log('*************In-Place Move Zeros to End (Two Pointer)******************');
function moveZerosToEndInPlace(arr: number[]): number[] {

    // 1. count length manually
    let len = 0;
    for (; arr[len] !== undefined; len++) { /* count items */ }
    if (len < 2) return arr;

    // 2. Two pointer technique
    //    - 'j' tracks where the next non-zero should go
    //    - 'i' scans through the array
    let j = 0;

    // 3. first pass: move all non-zeros to the front
    for (let i = 0; i < len; i++) {
        if (arr[i] !== 0) {
            arr[j] = arr[i];
            j++;
        }
    }

    // 4. second pass: fill remaining positions with zeros
    for (let i = j; i < len; i++) {
        arr[i] = 0;
    }

    return arr;   // return same array (modified in place)
}

console.log(moveZerosToEndInPlace([0, 1, 0, 3, 12]));          // [1, 3, 12, 0, 0]
console.log(moveZerosToEndInPlace([1, -2, 0, 0, 3, 4, 0, 5]));  // [1, 2, 3, 4, 5, 0, 0, 0]
console.log(moveZerosToEndInPlace([0, 0, 0, 1]));              // [1, 0, 0, 0]
