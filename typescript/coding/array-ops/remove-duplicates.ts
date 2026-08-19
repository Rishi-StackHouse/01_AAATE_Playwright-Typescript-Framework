/* Remove Duplicates - Return a new array that keeps only the FIRST occurrence
   of each value, removing every later duplicate (works for strings & numbers) */

console.log('*************Remove Duplicates******************');
function removeDuplicates(arr: (string | number)[]): (string | number)[] {
    // 1. Ignore empty / missing input
    if (!arr) return [];

    // count length manually (no .length usage while looping logic)
    let len = 0;
    for (; arr[len] !== undefined; len++) { /* count items */ }

    // 2. result array that will hold only unique values
    const result: (string | number)[] = [];
    let resultLen = 0;   // manual counter for how many items are in result

    // 3. go through every item in the original array
    for (let i = 0; i < len; i++) {
        let alreadyExists = false;

        // check if arr[i] is already present in result
        for (let j = 0; j < resultLen; j++) {
            if (result[j] === arr[i]) {   // strict compare keeps 1 and "1" separate
                alreadyExists = true;
                break;                    // found it, no need to look further
            }
        }

        // 4. only add it when it was not seen before
        if (!alreadyExists) {
            result[resultLen] = arr[i];
            resultLen++;
        }
    }

    return result;
}

console.log(removeDuplicates(["a", "b", "a", "c", "b"]));        // ['a','b','c']
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 4, 5]));         // [1,2,3,4,5]
console.log(removeDuplicates(["x", 1, "x", 1, 2, "y"]));         // ['x',1,2,'y']
console.log(removeDuplicates([1, "1", 1, "1"]));                 // [1,'1']  (number 1 !== string '1')

/**************************************************************************************/
