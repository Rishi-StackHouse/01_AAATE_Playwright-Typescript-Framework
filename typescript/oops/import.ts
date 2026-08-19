import {animal} from './oops';

let fakir = new animal();  // if no export - ReferenceError: class is not defined
console.log(fakir.name); 
console.log(fakir.shelter);