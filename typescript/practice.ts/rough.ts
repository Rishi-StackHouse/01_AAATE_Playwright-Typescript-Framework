// //to check anagram

// function isItAnAnagram(s1: string, s2: string): boolean {
	
// 	if (!s1 || !s2) {
// 		return false;
// 	}
	
// 	let len1=0;
// 	for (; s1[len1]!==undefined; len1++) {
// 	}
	
// 	let len2=0;
// 	for (; s2[len2]!==undefined; len2++) {
// 	}
	
// 	if (len1!==len2) {
// 		return false;
// 	}
	
// 	const track: boolean[] = [];
// 	for (let k=0; s2[k]!==undefined; k++) {
// 		track[k] = false;
// 	}
	
// 	for (let i=0; s1[i]!==undefined; i++) {
// 		let found = false;
		
// 		for (let j=0; s2[j]!==undefined; j++) {
// 			if (track[j]===false && s1[i]===s2[j]) {
// 				track[j] = true;
// 				found = true;
// 				break;
// 			}
// 		}
// 		if (found===false) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// console.log(isItAnAnagram('mark','karm')); 


//to check anagram

const Lower: Record<string, string> = {
    A:'a', B:'b', C:'c', D: 'd', E:    'e', F: 'f', G: 'g', H: 'h', I: 'i',
    J: 'j', K: 'k', L: 'l', M   :    'm', N: 'n', O: 'o', P: 'p', Q: 'q', R    :     'r',
    S: 's', T: 't', U: 'u', V: 'v', W: 'w', X: 'x', Y: 'y', Z: 'z',
};
function toLowerrr(ch: string): string {
	if (Lower[ch]!==undefined) {
		return Lower[ch];
	}
	else {
		return ch;
	}
}

// function isItAnAnagram(s1: string, s2: string): boolean {
	
// 	if (!s1 || !s2) {
// 		return false;
// 	}
	
// 	let len1=0;
// 	for (; s1[len1]!==undefined; len1++) {
// 	}
	
// 	let len2=0;
// 	for (; s2[len2]!==undefined; len2++) {
// 	}
	
// 	if (len1!==len2) {
// 		return false;
// 	}
	
// 	const track: boolean[] = [];
// 	for (let k=0; s2[k]!==undefined; k++) {
// 		track[k] = false;
// 	}
	
// 	for (let i=0; s1[i]!==undefined; i++) {
// 		let found = false;
		
// 		for (let j=0; s2[j]!==undefined; j++) {
// 			if (track[j]===false && toLowerrr(s1[i])===toLowerrr(s2[j])) {
// 				track[j] = true;
// 				found = true;
// 				break;
// 			}
// 		}
// 		if (found===false) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// console.log(isItAnAnagram('madam','Madam')); 


//to check palindrome

function toCheckPalindrome(s1: string): boolean {
	if (!s1) {
		return false;
	}
	
    let original = '';

    for (let j=0; s1[j]!==undefined; j++) {
        original = original + toLowerrr(s1[j]);
    }

	let reversed = '';
	
	for (let i=0; s1[i]!==undefined; i++) {
		reversed = toLowerrr(s1[i]) + reversed;
	}
	
	if (reversed === original) {
		return true;
	}
	else {
		return false;
	}
}
console.log(toCheckPalindrome('madam'));
console.log(toCheckPalindrome('Madam'));
console.log(toCheckPalindrome('hello'));