/* 
object - its a both data type and data structure 
         contains collection of similar and multiple data types in the form of key-value pairs
         keys are unique, values can be of any type
*/

/*
  ======================= Inbuilt ts methods to handle - Arrays =======================

  // Accessing keys and values


  ========================================================================================
  NOTE: Methods shared with arrays - length, slice, includes, indexOf
  ========================================================================================
*/

let object: {
    firstName: string;
    role: string;
    age: number;
    experience: number;
    isActive: boolean;
    isAdmin: boolean;

    skills: string[];
    scores: number[];

    address: { city: string; pincode: number };
    company: { name: string; team: { id: number; lead: string } };
} = {
    firstName: "Rishi",
    role: "QA Engineer",
    age: 26,
    experience: 3.5,
    isActive: true,
    isAdmin: false,

    skills: ["TypeScript", "Playwright", "SQL"],
    scores: [85, 92, 78],

    address: { city: "Chennai", pincode: 600001 },
    company: { name: "Cognizant", team: { id: 101, lead: "Arun" } },
};


console.log('------------------1.Accessing the elements in an object-----------------');
console.log(object.firstName); // Accessing a string value
console.log(object.age);        
console.log(object.skills); // Accessing an array value
console.log(object.address);






