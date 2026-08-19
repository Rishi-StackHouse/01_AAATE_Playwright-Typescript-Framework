/*Anagram - A string that can be rearranged to form another string */

console.log('*************Case Sensitive******************');
function isAnagram_withCaseSensitive(s1: string, s2: string): boolean {
    //1.Ignore the empty string
    if (!s1 || !s2) return false;

    let len1 = 0;
    for (; s1[len1] !== undefined; len1++) {
    }
    let len2 = 0;
    for (; s2[len2] !== undefined; len2++) {
    }
    if (len1 !== len2) return false;   // different lengths → not anagram

    // 2. Setting an false boolean array to track which chars of s2 are already matched with s1
    const used: boolean[] = [];
    for (let k = 0; k < len2; k++) {
        used[k] = false;
    }

    // 3. For each char in s1, checking whether that char exist in s2 or not
    for (let i = 0; s1[i] !== undefined; i++) {
        let found = false;

        for (let j = 0; s2[j] !== undefined; j++) {
            if (used[j] === false && s1[i] === s2[j]) {  // direct char compare
                used[j] = true;                          // marks this char of s2 is matched with s1 char
                found = true;
                break;                                   //stop seaching for s2, move to next char in s1, since we found a match for s1 char
            }
        }
        if (!found) return false;   // no partner for this s1 char
    }
    return true;   // every char paired → anagram
}

console.log(isAnagram_withCaseSensitive("listen", "Silent"));  // false
console.log(isAnagram_withCaseSensitive("Listen", "listen"));    // false
console.log(isAnagram_withCaseSensitive("racecar", "carrace"));    // true

/********************************************************************************************************/

console.log('*************Case Insensitive******************');
// Manual uppercase → lowercase map (no built-in methods)
const LOWER: Record<string, string> = {
    A: 'a', B: 'b', C: 'c', D: 'd', E: 'e', F: 'f', G: 'g', H: 'h', I: 'i',
    J: 'j', K: 'k', L: 'l', M: 'm', N: 'n', O: 'o', P: 'p', Q: 'q', R: 'r',
    S: 's', T: 't', U: 'u', V: 'v', W: 'w', X: 'x', Y: 'y', Z: 'z',
};

// Returns the lowercase form of a char; if not uppercase, returns it unchanged
function toLower(ch: string): string {
    if (LOWER[ch] !== undefined) {
        return LOWER[ch];
    } 
    else {
        return ch;
    }
}

function isAnagram_withCaseInSensitive(s1: string, s2: string): boolean {
    if (!s1 || !s2) return false;

    let len1 = 0;
    for (; s1[len1] !== undefined; len1++) { /* count s1 */ }
    let len2 = 0;
    for (; s2[len2] !== undefined; len2++) { /* count s2 */ }
    if (len1 !== len2) return false;

    const used: boolean[] = [];
    for (let k = 0; k < len2; k++)  {
        used[k] = false; 
    }

    for (let i = 0; s1[i] !== undefined; i++) {
        let found = false;
        for (let j = 0; s2[j] !== undefined; j++) {
            // normalize BOTH chars before comparing
            if (used[j] === false && toLower(s1[i]) === toLower(s2[j])) {
                used[j] = true;
                found = true;
                break;
            }
        }
        if (!found) return false;
    }
    return true;
}

console.log(isAnagram_withCaseInSensitive("Listen", "silent"));  // true ✅
console.log(isAnagram_withCaseInSensitive("listen", "silent"));  // true ✅
console.log(isAnagram_withCaseInSensitive("hello", "world"));    // false

/*********************************************************************************************************/