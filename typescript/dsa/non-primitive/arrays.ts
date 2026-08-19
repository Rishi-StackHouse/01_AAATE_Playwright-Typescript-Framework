/* 
array - its a both data type and data structure 
        collection of data, can be of mixed types
        starts from 0 index, mutable in nature, can be of any length
*/

/*
  ======================= Inbuilt ts methods to handle - Arrays =======================

  1. .length               - Returns the number/count of elements in an array

  // Adding, Removing and returning the Elements from the start and end of an array
  
  2. .push(p1,p2)          - Adds one or more elements at the end of an array and returns the count 
  3. .pop()                - Removes the last element from an array and returns it
  4. .unshift(p1,p2)       - Adds one or more elements at the beginning of an array and returns the count
  5. .shift()              - Removes the first element from an array and returns it

  // Adding, Removing and returning the Elements from any position in an array

  6. .splice(start, removeCount, item1, item2) - Adds and removes elements from an array at a specified index and returns the removed elements

  // Extracting Elements

  7. .slice(start, end)    - Returns a portion of an array between start and end indices, supports negative indices

  // Searching and Checking for Elements

  8. .includes(value)       - Checks if an array contains a specified value, returns true or false
  9. .indexOf(value)        - Returns the first index of the specified value, or -1 if not found

  // Combining and Joining Arrays
  10. .concat(arr1, arr2)   - Combines two or more arrays and returns a new array
  11. .join(separator)      - Joins all elements of an array into a string, separated by the specified separator

  ========================================================================================
  NOTE: Methods shared with arrays - length, slice, includes, indexOf
  ========================================================================================
*/


const mixed: any[] = ["Playwright", 29, true, { name: "Rishi", info: ["26", "NonVeg", "Cricket"]} , [1, 2, 3], null];
//const mixed: (string | number | boolean | object | null)[] = ["Playwright", 29, true, { name: "Rishi"} , [1, 2, 3], null];

// const mixed: Array<any> = ["Playwright", 29, true, { name: "Rishi"} , [1, 2, 3], null];
// const mixed: Array<string | number | boolean | object | null> = ["Playwright", 29, true, { name: "Rishi"} , [1, 2, 3], null];

console.log('------------------1.Accessing the elements in an array-----------------');
console.log(mixed);
console.log(mixed[0]);
console.log(mixed[1]);
console.log(mixed[0], mixed[1], mixed[3], mixed[4], mixed[5]);
console.log(`Combining 2 arrays - ${mixed[0]}, ${mixed[1]}, ${JSON.stringify(mixed[3])}`); // Inside template literals, we need to use JSON.stringify() to convert the object to string

console.log('------------------2.Accessing Nested Elements in an array-----------------');

console.log(mixed[4][2]); // Accessing the element of the nested array
console.log(mixed[3].name); //["name"], any literals      // Accessing the property of the object inside the array
console.log(mixed[3]["info"][1]);

console.log('------------------3.Array Length-----------------');
console.log(mixed.length);

console.log('------------------.push()-----------------');
let pushArray: any[] = ["Qwerty", 1, true, "existing", 2, 3, 4, 5];
let pushedItems = pushArray.push("new", "another", "last"); // multi parameters, returns the count - 11
console.log(pushArray);
console.log(pushedItems);

console.log('------------------.pop()-----------------');
let popArray: any[] = ["Qwerty", 1, true, "existing", 2, 3, 4, 5];
let poppedElement = popArray.pop();
console.log(popArray);
console.log(poppedElement);

console.log('------------------.unshift()-----------------');
let unshiftArray: any[] = ["Qwerty", 1, true, "existing", 2, 3, 4, 5];
let unshiftedCount = unshiftArray.unshift("new", "another", "last"); // multi parameters, returns the count - 11
console.log(unshiftArray);
console.log(unshiftedCount);

console.log('------------------.shift()-----------------');
let shiftArray: any[] = ["Qwerty", 1, true, "existing", 2, 3, 4, 5];
let shiftedElement = shiftArray.shift();
console.log(shiftArray);
console.log(shiftedElement);

console.log('------------------.splice()-----------------');
let spliceArray: any[] = ["Qwerty", 1, true, "existing", 2, 3, 4, 5];
let splicedElements = spliceArray.splice(2, 3, "new", "another", "last");
console.log(spliceArray);
console.log(splicedElements);

let spliceArray2: any[] = ["Qwerty", 1, true, "existing", 2, 3, 4, 5];
let removedElements =  spliceArray2.splice(2, 0, "new", "another", "last");
console.log(spliceArray2);
console.log(removedElements);

console.log('------------------.slice()-----------------');
let sliceArray: any[] = ["Qwerty", 1, true, "existing", 2, 3, 4, 5];
let slicedArray = sliceArray.slice(2, 5); // returns the array of elements from index 2 to 4 (5 is not included)
console.log(sliceArray);
console.log(slicedArray);

console.log('------------------.includes()-----------------');
let includesArray: any[] = ["Qwerty", 1, true, "existing", 2, 3, 4, 5];
let includesResult1 = includesArray.includes("existing");
let includesResult2 = includesArray.includes("non-existing");
console.log(includesResult1);
console.log(includesResult2);

console.log('------------------.indexOf()-----------------');
let indexOfArray: any[] = ["Qwerty", 1, true, "existing", 2, 3, 4, 5];
let indexOfResult1 = indexOfArray.indexOf("existing");
let indexOfResult2 = indexOfArray.indexOf("non-existing");
console.log(indexOfResult1);
console.log(indexOfResult2);

console.log('------------------.concat()-----------------');
let concatArray1: any[] = ["Qwerty", 1, true];
let concatArray2: any[] = ["existing", 2, 3, 4, 5,];
let concatenatedArray = concatArray1.concat(concatArray2);
console.log(concatenatedArray);

console.log('------------------.join()-----------------');
let joinArray: any[] = ["Qwerty", 1, true, "existing", 2, 3, 4, 5];
console.log(joinArray);
let joinedString = joinArray.join(", "); // returns a string with all the elements of the array joined by the specified separator (", ")
console.log(joinedString);















































// /* 
// tuple - collection of data of fixed length and data types
// */

// let tuple: [string, string, number, boolean] = ['rishi', 'developer', 1, true];

// /*
// set - collection of unique values, can be of mixed types 
// */
// let set: Set<string | number | boolean> = new Set(['rishi', 1, true, 'Playwright', false, 3.4, false, 'rishi',3.4, 'racecar']);
// let setArray = Array.from(set); // convert set to array
// let setArray2 = [...set]; // convert set to array using spread operator

// console.log(set);
// console.log(setArray);
// console.log(setArray2);

//  /*
//  map - collection of key-value pairs, keys are unique, values can be of any type
//  */

// let map: Map<string, number> = new Map([
//   ['rishi', 1],
//   ['playwright', 2],
//   ['automation', 3]
// ]);

// console.log(typeof map);
