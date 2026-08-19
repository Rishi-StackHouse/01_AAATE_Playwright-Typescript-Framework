/*Palindrome - A string that should be read the same backward as forward */

console.log('*************Case Sensitive******************');
function isPalindrome_caseSensitive(s1: string): boolean {
    if (!s1) return false;

    // count length manually (no .length)
    let len = 0;
    for (; s1[len] !== undefined; len++) { /* count chars */ }

    // 1. build the reversed string by reading s1 from the end to the start
    let reversed = "";
    for (let i = 0; i < len; i++) {
        reversed = s1[i] + reversed;   // add each char to the FRONT
    }

    // 2. compare reversed with the original; if same → palindrome
    if (reversed === s1) {
        return true;
    } 
    else {
        return false;
    }
}

console.log(isPalindrome_caseSensitive("racecar"));  // true
console.log(isPalindrome_caseSensitive("Racecar"));  // false ('R' !== 'r')
console.log(isPalindrome_caseSensitive("Madam"));    // false ('M' !== 'm')
console.log(isPalindrome_caseSensitive("Hello"));    // false

/**************************************************************************************/

console.log('*************Case Insensitive******************');
// Manual uppercase → lowercase map (no built-in methods)
const LOWERR: Record<string, string> = {
    A: 'a', B: 'b', C: 'c', D: 'd', E: 'e', F: 'f', G: 'g', H: 'h', I: 'i',
    J: 'j', K: 'k', L: 'l', M: 'm', N: 'n', O: 'o', P: 'p', Q: 'q', R: 'r',
    S: 's', T: 't', U: 'u', V: 'v', W: 'w', X: 'x', Y: 'y', Z: 'z',
};

function toLowerr(ch: string): string {
    if (LOWERR[ch] !== undefined) {
        return LOWERR[ch];
    } else {
        return ch;
    }
}

function isPalindrome_caseInsensitive(s1: string): boolean {
    if (!s1) return false;

    let len = 0;
    for (; s1[len] !== undefined; len++) { /* count chars */ }

    // 1. convert original string to lowercase (no built-in methods)
    let lowerOriginal = "";
    for (let i = 0; i < len; i++) {
        lowerOriginal = lowerOriginal + toLowerr(s1[i]);   // add lowercase char to the END
    }

    // 2. build the reversed lowercase string
    let reversed = "";
    for (let i = 0; i < len; i++) {
        reversed = toLowerr(s1[i]) + reversed;   // add lowercase char to the FRONT
    }

    // 3. compare reversed with the lowercase original; if same → palindrome
    if (reversed === lowerOriginal) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isPalindrome_caseInsensitive("Racecar"));  // true ✅
console.log(isPalindrome_caseInsensitive("MaDam"));    // true ✅
console.log(isPalindrome_caseInsensitive("Madamm"));    // false

/**************************************************************************************/