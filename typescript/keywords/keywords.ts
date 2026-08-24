// /*
// /*

// Why Records and Interfaces

// ❌ Default Object type - Can't reuse it for other similar objects
// ❌ Gets messy when dealing with complex/nested structures
// -------------------------------------------------

// Records - Create a type-safed pattern for keys and values in the object for storing multiple properties of the same type, allowing dynamic addition of keys.
// Interfaces - Create a predefined structure for objects, ensuring typesafety for the properties and their values.

// Difference:-
// Records - If once the type pattern for the key and values is defined, we can n number of properties following the same pattern
// Interface - All the properties and their types are defined in advance, so we can only have those properties enforced with typesafety in the object
// */


// console.log('\n------------------3. Record - Simple Examples----------------');

// // Example 1: Simple string-to-number mapping (Test Scores)
// const testScores: Record<string, number> = {
//     math: 95,
//     science: 88,
//     english: 72,
// };

// console.log("Math Score:", testScores["math"]);
// console.log("Science Score:", testScores.science);

// // Can add new keys dynamically
// testScores["history"] = 80;
// console.log("All Scores:", testScores);


// console.log('\n------------------4. Interface - Simple Example----------------');

// /*
//   Interface - Define a structure with fixed keys and different value types
//   - Keys are known ahead of time
//   - Can reuse the same structure for multiple objects
// */

// // Define the structure once
// interface User {
//     name: string;
//     age: number;
//     isActive: boolean;
// }

// // Reuse for multiple objects
// const user1: User = { name: "Rishi", age: 26, isActive: true };
// const user2: User = { name: "Arun", age: 30, isActive: false };

// console.log("User 1:", user1.name, "-", user1.age, "years old");
// console.log("User 2:", user2.name, "-", user2.age, "years old");




// */

/*
Interface 
1. Demands the properties
2. Wont allow any extra properties
3. Can be reused for multiple objects
4. Ensure type safety for each properties
*/