// for loops, we can use for, for...in, for...of, while, do...while

// for loops with string

 /*
 for loop

 for (1-initialization; 2-condition; 4-increment/decrement) {
        3-logic/steps
 }
 */

let string: string = "Playwright";

console.log('normal for loop');
for (let i=0; i < 10; i++) {
    console.log(string[i]);
}

console.log('initialization of iterator outside the loop');
let i=0;
for (; string[i] !== undefined; i++) {
    console.log(string[i]);
}
 
console.log('for of loop');
for (let str of string) {
    console.log(str);
}

/*
while loop

while (1-initialization; 2-condition) {
        3-logic/steps
        4-increment/decrement
}
*/

console.log('normal while loop');
 let j = 0;
 while (j < string.length) {
    console.log(string[j]);
    j++;
 }

/*
break    -> stops the loop completely and exits
continue -> skips the current iteration and moves to the next one
*/

// break example: stop the loop when we reach 5
console.log('break example');
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // loop stops here, 5 to 10 are never printed
    }
    console.log(i); // prints 1, 2, 3, 4
}

// continue example: skip even numbers, print only odd numbers
console.log('continue example');
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // skip the rest of this iteration for even numbers
    }
    console.log(i); // prints 1, 3, 5, 7, 9
}

// break with a string: stop printing once we hit the letter 'w'
console.log('break with string');
for (let str of string) {
    if (str === 'w') {
        break; // stops at 'w'
    }
    console.log(str); // prints P, l, a, y
}

// continue with a string: skip vowels, print everything else
console.log('continue with string');
for (let str of string) {
    if ('aeiouAEIOU'.includes(str)) {
        continue; // skip vowels
    }
    console.log(str);
}

