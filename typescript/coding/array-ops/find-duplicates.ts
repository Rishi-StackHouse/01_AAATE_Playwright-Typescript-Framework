/* Find Duplicates - Return a new array listing each value that appears MORE
   THAN ONCE in the input (works for strings & numbers), listed only once */

console.log('*************Find Duplicates******************');
function findDuplicates(arr: (string | number)[]): (string | number)[] {
    // 1. Ignore empty / missing input
    if (!arr) return [];

    // count length manually
    let len = 0;
    for (; arr[len] !== undefined; len++) { /* count items */ }

    // 2. result array that will hold the duplicate values
    const duplicates: (string | number)[] = [];
    let dupLen = 0;   // manual counter for how many duplicates found

    // 3. compare each item with every other item that comes AFTER it
    for (let i = 0; i < len; i++) {
        let count = 1;   // arr[i] itself counts as one occurrence

        for (let j = i + 1; j < len; j++) {
            if (arr[i] === arr[j]) {   // strict compare keeps 1 and "1" separate
                count++;
            }
        }

        // 4. if it appeared more than once, it is a duplicate
        if (count > 1) {
            // 5. make sure we did not already record this value
            let alreadyRecorded = false;
            for (let k = 0; k < dupLen; k++) {
                if (duplicates[k] === arr[i]) {
                    alreadyRecorded = true;
                    break;
                }
            }

            if (!alreadyRecorded) {
                duplicates[dupLen] = arr[i];
                dupLen++;
            }
        }
    }

    return duplicates;
}

console.log(findDuplicates(["a", "b", "a", "c", "b", "b"]));   // ['a','b']
console.log(findDuplicates([1, 2, 2, 3, 4, 4, 4, 5]));         // [2,4]
console.log(findDuplicates(["x", 1, "x", 1, 2, "y"]));         // ['x',1]
console.log(findDuplicates([1, 2, 3, 4]));                     // [] (no duplicates)

/**************************************************************************************/
