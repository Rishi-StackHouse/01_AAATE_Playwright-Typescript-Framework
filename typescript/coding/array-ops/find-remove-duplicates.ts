// Find Duplicates - Return a new array listing with the values that appear MORE than once

console.log('*************Find Duplicates******************');
function findDuplicates(arr: (string | number)[]): (string | number)[]{

    // 1. count length manually
    let len = 0;
    for (; arr[len] !== undefined; len++) { /* count items */ }
    if (len < 2) return [];   // if less than 2 items, no duplicates possible

    // 2. result array that will hold the duplicate values
    let duplicates: (string | number)[] = [];
    let dupLen = 0;   // manual counter for how many duplicates found

    // 3. compare each item with every other item that comes AFTER it
    for (let i = 0; i < len; i++) {
        let count = 1;   // arr[0] itself counts as one occurrence, and reset for each element

        for (let j = i + 1; j < len; j++) {
            if (arr[i] === arr[j]) {   // strict compare keeps 1 and "1" separate
                count++;
            }
        }
        // 4. if it appeared more than once, it is a duplicate
        if (count > 1) {

            // 5. make sure we did not already record this current value of arr[i] in duplicates array
            let alreadyRecorded = false;  
            
            for (let k = 0; k < dupLen; k++) {    // Step 2: Loop through duplicates array
                if (duplicates[k] === arr[i]) {   // Step 3: Is current value already there?
                    alreadyRecorded = true;       // Step 4: Yes! Mark it
                    break;                        // Step 5: Stop looking, we found it
                }
            }
            if (alreadyRecorded===false) {        // Step 6: If NOT found in duplicates array ...
                duplicates[dupLen] = arr[i];      // Step 7: ...add it
                dupLen++;                         // Step 8: Since we added for only for the first time, increment the duplicates counter
            }                                     // duplen will increment until all the items are checked in the main array. 
        }
    }

    return duplicates;
}

console.log(findDuplicates(["a", "b", "a", "c", "b", "b"]));   // ['a','b']
console.log(findDuplicates([1, 2, 2, 3, 4, 4, 4, 5]));         // [2,4]
console.log(findDuplicates(["x", 1, "x", 1, 2, "y"]));         // ['x',1]
console.log(findDuplicates([1, 2, 3, 4]));                     // [] (no duplicates)

/**************************************************************************************/

// Remove Duplicates - Return a new array that keeps only the FIRST occurrence

console.log('*************Remove Duplicates******************');
function removeDuplicates(arr: (string | number)[]): (string | number)[] {

    // 1. count length manually (no .length usage while looping logic)
    let len = 0;
    for (; arr[len] !== undefined; len++) { /* count items */ }
    if (len < 2) return [];   // if less than 2 items, no duplicates possible

    // 2. result array that will hold only unique values
    const removed: (string | number)[] = [];
    let removedLen = 0;   // manual counter for how many items are in result

    // 3. go through every item in the original array
    for (let i = 0; i < len; i++) {
        let alreadyExists = false;

        // check if arr[i] is already present in result
        for (let k = 0; k < removedLen; k++) {
            if (removed[k] === arr[i]) {   // strict compare keeps 1 and "1" separate
                alreadyExists = true;
                break;                    // found it, no need to look further
            }
        }

        // 4. only add it when it was not seen before
        if (alreadyExists === false) {
            removed[removedLen] = arr[i];
            removedLen++;
        }
    }
    
    return removed;
}

console.log(removeDuplicates(["a", "b", "a", "c", "b"]));        // ['a','b','c']
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 4, 5]));         // [1,2,3,4,5]
console.log(removeDuplicates(["x", 1, "x", 1, 2, "y"]));         // ['x',1,2,'y']
console.log(removeDuplicates([1, "1", 1, "1"]));                 // [1,'1']  (number 1 !== string '1')
console.log(removeDuplicates([1]));

/**************************************************************************************/


// // Find and Remove Duplicates - Return unique array AND the duplicates found
// function findAndRemoveDuplicates(arr: (string | number)[]): [(string | number)[], (string | number)[]] {
//     // 1. Ignore empty / missing input
//     if (!arr) return [[], []];

//     // count length manually
//     let len = 0;
//     for (; arr[len] !== undefined; len++) { }

//     // 2. result array (unique values) and duplicates array
//     const result: (string | number)[] = [];
//     let resultLen = 0;

//     const duplicatesFound: (string | number)[] = [];  // 👈 NEW: track duplicates
//     let dupLen = 0;

//     // 3. go through every item in the original array
//     for (let i = 0; i < len; i++) {
//         let alreadyExists = false;

//         // check if arr[i] is already present in result
//         for (let j = 0; j < resultLen; j++) {
//             if (result[j] === arr[i]) {
//                 alreadyExists = true;
//                 break;
//             }
//         }

//         // 4. if already exists → it's a duplicate
//         if (alreadyExists) {
//             // Check if we already recorded this duplicate value
//             let alreadyRecorded = false;
//             for (let k = 0; k < dupLen; k++) {
//                 if (duplicatesFound[k] === arr[i]) {
//                     alreadyRecorded = true;
//                     break;
//                 }
//             }
//             if (!alreadyRecorded) {
//                 duplicatesFound[dupLen] = arr[i];  // 👈 Record the duplicate
//                 dupLen++;
//             }
//         } else {
//             // First occurrence → add to result
//             result[resultLen] = arr[i];
//             resultLen++;
//         }
//     }

//     return [result, duplicatesFound];  // 👈 Return both
// }

// // Usage - when you WANT duplicates:
// console.log('*************Find and Remove Duplicates******************');
// console.log(findAndRemoveDuplicates(["a", "b", "a", "c", "b"]));  // [['a','b','c'], ['a','b']]

// const [unique, dups] = removeDuplicates([1, 2, 2, 3, 4, 4, 4, 5]);
// console.log(unique);  // [1, 2, 3, 4, 5]
// console.log(dups);    // [2, 4]

// // Usage - when you DON'T need duplicates (let it be "dead"):
// const [uniqueOnly] = removeDuplicates([1, 2, 2, 3]);  // ignore second element
// console.log(uniqueOnly);  // [1, 2, 3]
