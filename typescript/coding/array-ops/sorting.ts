// Sorting Arrays - Arrange elements in a specific order
// Sorting = Arranging elements based on a criteria (ascending, descending, alphabetical, etc.)
// Using manual comparison and swapping (no built-in methods)

/**************************************************************************************/

// 1. Sort Numbers Ascending - Arrange numbers from smallest to largest

console.log('*************Sort Numbers Ascending******************');
function sortNumbersAscending(arr: number[]): number[] {
    // 1. count length manually
    let len = 0;
    for (; arr[len] !== undefined; len++) {}
    if (len <= 1) return arr;   // nothing to sort

    // 2. create a copy to avoid mutating original
    let result: number[] = [];
    for (let i = 0; i < len; i++) {
        result[i] = arr[i];
    }

    // 3. compare each element with every other element and swap if needed
    // Outer loop: pick each position
    // Inner loop: compare with remaining elements, find smallest and place it
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            // if current element is greater than compared element, swap them
            if (result[i] > result[j]) {
                let temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }

    return result;
}

console.log(sortNumbersAscending([5, 2, 8, 1, 9]));          // [1, 2, 5, 8, 9]
console.log(sortNumbersAscending([10, 3, 7, 1, 5]));         // [1, 3, 5, 7, 10]
console.log(sortNumbersAscending([-5, -2, -10, -1]));        // [-10, -5, -2, -1]
console.log(sortNumbersAscending([7]));                       // [7]
console.log(sortNumbersAscending([]));                        // []
console.log(sortNumbersAscending([3, 3, 3]));                 // [3, 3, 3]

/**************************************************************************************/

// 2. Sort Numbers Descending - Arrange numbers from largest to smallest

console.log('*************Sort Numbers Descending******************');
function sortNumbersDescending(arr: number[]): number[] {
    // 1. count length manually
    let len = 0;
    for (; arr[len] !== undefined; len++) {}
    if (len <= 1) return arr;   // nothing to sort

    // 2. create a copy to avoid mutating original
    let result: number[] = [];
    for (let i = 0; i < len; i++) {
        result[i] = arr[i];
    }

    // 3. compare each element with every other element and swap if needed
    // For descending: swap if current is SMALLER than compared (we want bigger first)
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            // if current element is smaller than compared element, swap them
            if (result[i] < result[j]) {
                let temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }

    return result;
}

console.log(sortNumbersDescending([5, 2, 8, 1, 9]));         // [9, 8, 5, 2, 1]
console.log(sortNumbersDescending([10, 3, 7, 1, 5]));        // [10, 7, 5, 3, 1]
console.log(sortNumbersDescending([-5, -2, -10, -1]));       // [-1, -2, -5, -10]
console.log(sortNumbersDescending([7]));                      // [7]
console.log(sortNumbersDescending([]));                       // []
console.log(sortNumbersDescending([3, 3, 3]));                // [3, 3, 3]

/**************************************************************************************/

// 3. Sort Strings Alphabetically (A-Z) - Arrange strings from A to Z

console.log('*************Sort Strings Alphabetically (A-Z)******************');
function sortStringsAscending(arr: string[]): string[] {
    // 1. count length manually
    let len = 0;
    for (; arr[len] !== undefined; len++) {}
    if (len <= 1) return arr;   // nothing to sort

    // 2. create a copy to avoid mutating original
    let result: string[] = [];
    for (let i = 0; i < len; i++) {
        result[i] = arr[i];
    }

    // 3. compare strings directly
    // For A-Z: swap if current string comes AFTER compared string alphabetically
    // Note: Works for arrays with consistent casing (all lowercase OR all uppercase)
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            // if str1 > str2 alphabetically, swap them
            if (result[i] > result[j]) {
                let temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }

    return result;
}

console.log(sortStringsAscending(['banana', 'apple', 'cherry']));       // ['apple', 'banana', 'cherry']
console.log(sortStringsAscending(['Zebra', 'Mango', 'Apple']));         // ['Apple', 'Mango', 'Zebra']
console.log(sortStringsAscending(['dog', 'cat', 'bird', 'ant']));       // ['ant', 'bird', 'cat', 'dog']
console.log(sortStringsAscending(['hello']));                            // ['hello']
console.log(sortStringsAscending([]));                                   // []
console.log(sortStringsAscending(['same', 'same', 'same']));            // ['same', 'same', 'same']

/**************************************************************************************/

// 4. Sort Strings Reverse Alphabetically (Z-A) - Arrange strings from Z to A

console.log('*************Sort Strings Reverse Alphabetically (Z-A)******************');
function sortStringsDescending(arr: string[]): string[] {
    // 1. count length manually
    let len = 0;
    for (; arr[len] !== undefined; len++) {}
    if (len <= 1) return arr;   // nothing to sort

    // 2. create a copy to avoid mutating original
    let result: string[] = [];
    for (let i = 0; i < len; i++) {
        result[i] = arr[i];
    }

    // 3. compare strings directly
    // For Z-A: swap if current string comes BEFORE compared string alphabetically
    // Note: Works for arrays with consistent casing (all lowercase OR all uppercase)
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            // if str1 < str2 alphabetically, swap them (we want bigger first)
            if (result[i] < result[j]) {
                let temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }

    return result;
}

console.log(sortStringsDescending(['banana', 'apple', 'cherry']));      // ['cherry', 'banana', 'apple']
console.log(sortStringsDescending(['Zebra', 'Mango', 'Apple']));        // ['Zebra', 'Mango', 'Apple']
console.log(sortStringsDescending(['dog', 'cat', 'bird', 'ant']));      // ['dog', 'cat', 'bird', 'ant']
console.log(sortStringsDescending(['hello']));                           // ['hello']
console.log(sortStringsDescending([]));                                  // []
console.log(sortStringsDescending(['same', 'same', 'same']));           // ['same', 'same', 'same']
