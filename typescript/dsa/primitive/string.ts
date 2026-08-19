/* 
string - sequence of characters, enclosed in single or double quotes or backticks
         immutable in nature  
*/

/*
  ======================= Inbuilt ts methods to handle - string =======================

  1. .length               - Returns the number/count of characters in a string (including spaces and special characters)
  2. .toUpperCase()        - Converts all characters in a string to uppercase (no effect on numbers and special chars)
  3. .toLowerCase()        - Converts all characters in a string to lowercase (no effect on numbers and special chars)

  // Whitespace Handling

  4. .trim()               - Removes whitespace from both ends of a string
  5. .trimStart()          - Removes whitespace from the start of a string alone
  6. .trimEnd()            - Removes whitespace from the end of a string alone

  // String Manipulation & Replacement

  7. .split(delimiter)     - Splits a string and place the items into an array based on a specified delimiter
  8. .replace(search, new) - Returns a new string with the first occurrence of searchValue replaced by newValue
  9. .replaceAll(s, new)   - Returns a new string with all occurrences of searchValue replaced by newValue

  // Substring Extraction

  10. .slice(start, end)      - Returns a portion of the string between start and end indices, supports negative indices
  11. .substring(start, end)  - Returns a portion of the string between start and end indices, supports auto swapping
  12. .charAt(index)          - Returns the character at the specified index

  // Character Code Retrieval

  13. .charCodeAt(index)   - Returns the ASCII/Unicode code of the character at the specified index
  14. .codePointAt(index)  - Returns the full Unicode code point of the character at the specified index (handles emojis)

  // String Searching & Checking

  15. .startsWith(substr)  - Checks if the string starts with a specified substring, returns true or false
  16. .endsWith(substr)    - Checks if the string ends with a specified substring, returns true or false
  17. .includes(substr)    - Checks if the string contains a specified substring, returns true or false
  18. .indexOf(substr)     - Returns the index of the first occurrence of a specified substring, or -1 if not found

  ========================================================================================
  NOTE: Methods shared with arrays - length, slice, includes, indexOf
  ========================================================================================
*/

console.log('-----------------working with string-----------------');
let sample: string = 'This is a sample string';
let empty: string = '';
console.log(typeof sample, typeof empty);
console.log(empty[0]);

console.log('-----------------immutable in nature-----------------');
let immutable: string = 'immutable';
// immutable[0] = 'I';

// .length
console.log('-----------------.length-----------------');
let firstname: string = "rishi";
let lastname = `kumar`;
console.log(typeof firstname, typeof lastname);
console.log(firstname.length);

// .toUpperCase() and .toLowerCase()
console.log('-----------------.toUpperCase() and .toLowerCase()-----------------');
let upper: string = 'upper CASE!@#$';
let UPPER: string = upper.toUpperCase();
console.log(UPPER);
console.log(upper.toUpperCase().toLowerCase());

// .trim(), .trimStart(), .trimEnd()
console.log('-----------------.trim(), .trimStart(), .trimEnd()-----------------');
let spaced: string = '   spaced string   ';
let space: string = `      Another spaced string      `;
console.log(spaced.trim());
console.log(spaced.trimStart());
console.log(spaced.trimEnd());

let cutspace: string = space.trim();
console.log(cutspace);
let startcut: string = space.trimStart();
console.log(startcut);

// .split()
console.log('-----------------.split()-----------------');
let fruits: string = 'Apple,Banana,Mango,Orange';
let split: string[] = fruits.split(",");
console.log(split);
console.log(fruits.split(`,`));

//.replace() and .replaceAll()
console.log('-----------------.replace() and .replaceAll()-----------------');
let Replace: string = "Replace method replaces the first occurrence of a substring the the the @#";
console.log(Replace.replace("method", "function"));
console.log(Replace.replaceAll("the", "THE"));

let Replaced: string = Replace.replace(`the`, 'wooho');
console.log(Replaced);
let ReplacedAll: string = Replace.replaceAll(`the`, 'wooho');
console.log(ReplacedAll);

// .slice() and .substring()
console.log('-----------------.slice() and .substring()-----------------');
let slice: string = "Slice method extracts a section of a string and returns it as a new string";
console.log(slice.slice(12, 31));
console.log(slice.slice(-6, -1));

let substring: string = "Substring method extracts a section of a string and returns it as a new string";
console.log(substring.substring(1, 16));
console.log(substring.substring(-6, -1));  // negative indices are treated as 0 in substring  returns empty string

// .charAt()
console.log('-----------------.charAt()-----------------');
let charAt: string = "Character at example";
console.log(charAt.charAt(0));
console.log(charAt.charAt(5));
console.log(charAt.charAt(charAt.length - 1));

// .charCodeAt() and .codePointAt() // charCode - (a - 97, z - 122 || A-65, Z-90 || 0-48)  codePoint - (a-97, A-65, 0-48, emoji-128512)
console.log('-----------------.charCodeAt() and .codePointAt()-----------------');
let charCodeAt: string = "Character code example";
console.log(charCodeAt.charCodeAt(0));
console.log(charCodeAt.charCodeAt(5));
console.log(charCodeAt.charCodeAt(charCodeAt.length - 1));

console.log(charCodeAt.codePointAt(0));
console.log(charCodeAt.codePointAt(5));
console.log(charCodeAt.codePointAt(charCodeAt.length - 1));

// .startsWith(), .endsWith(), .includes(), .indexOf()
console.log('-----------------.startsWith(), .endsWith(), .includes(), .indexOf()-----------------');
let startsWith: string = "Starts with example";
console.log(startsWith.startsWith("Starts"));
console.log(startsWith.startsWith("with"));

console.log(startsWith.endsWith("example"));
console.log(startsWith.includes("with"));
console.log(startsWith.indexOf("with"));





