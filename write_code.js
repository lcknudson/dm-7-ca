const perf = require('execution-time')();

console.log(`Hello World, here we go.`, `\n`)

function addToZero(nums) {
    const numSet = new Set(); // Create a set to store encountered numbers

    for (const num of nums) {
        // Check if the negative counterpart of the current number is in the set
        if (numSet.has(-num)) {
            return true; // Found a pair that sums to 0
        }

        numSet.add(num); // Add the current number to the set
    }

    return false; // No such pair was found
}

/* 
The overall runtime complexity of this function
is O(n), where n is the number of elements in the nums array

 */

const nums1 = []
const nums2 = [1]
const nums3 = [1, 2, 3,]
const nums4 = [1, 2, 3, -2]

// Test cases
// console.log(addToZero(nums1));        // Output: false
// console.log(addToZero(nums2));       // Output: false
// console.log(addToZero(nums3)); // Output: false
// console.log(addToZero(nums4)); // Output: true




perf.start();
const result1 = addToZero(nums1);
console.log("addToZero(nums1) result:", result1);
const resultsInsert1 = perf.stop();
console.log("addToZero(nums1) runtime:", resultsInsert1.preciseWords, `\n`);

perf.start();
const result2 = addToZero(nums2);
console.log("addToZero(nums2) result:", result2);
const resultsInsert2 = perf.stop();
console.log("addToZero(nums2) runtime:", resultsInsert2.preciseWords, `\n`);

perf.start();
const result3 = addToZero(nums3);
console.log("addToZero(nums3) result:", result3);
const resultsInsert3 = perf.stop();
console.log("addToZero(nums3) runtime:", resultsInsert3.preciseWords, `\n`);

perf.start();
const result4 = addToZero(nums4);
console.log("addToZero(nums4) result:", result4);
const resultsInsert4 = perf.stop();
console.log("addToZero(nums4) runtime:", resultsInsert4.preciseWords, `\n`);


function hasUniqueChars(word) {
    const charSet = new Set();

    for (const char of word) {
        if (charSet.has(char)) {
            return false; // Found a repeated character
        }
        charSet.add(char);
    }

    return true; // No repeated characters found
}

/* 
The overall runtime complexity of this function
is O(n), where n is the length of the input word

 */


// Test cases
perf.start();
const char1 = hasUniqueChars("Monday")
console.log(`hasUniqueChars("Monday") result:`, char1)
const resultschar1 = perf.stop()
console.log(`hasUniqueChars("Monday") runtime:`, resultschar1.preciseWords, `\n`)

perf.start();
const char2 = hasUniqueChars("Moonday")
console.log(`hasUniqueChars("Moonday") result:`, char2)
const resultschar2 = perf.stop()
console.log(`hasUniqueChars("Moonday") runtime:`, resultschar2.preciseWords, `\n`)



function isPangram(sentence) {
    const alphabetSet = new Set('abcdefghijklmnopqrstuvwxyz');

    for (const char of sentence.toLowerCase()) {
        if (alphabetSet.has(char)) {
            alphabetSet.delete(char);
        }
        if (alphabetSet.size === 0) {
            return true; // All letters of the alphabet have been found
        }
    }

    return false; // Not a pangram
}

// Test cases
// console.log(isPangram("The quick brown fox jumps over the lazy dog!")); // Output: true
// console.log(isPangram("I like cats, but not mice"));                  // Output: false

perf.start();
const isPangram1 = isPangram("The quick brown fox jumps over the lazy dog!")
console.log(`isPangram("The quick brown fox jumps over the lazy dog!") result:`, isPangram1)
const resultsPangram1 = perf.stop()
console.log(`isPangram("The quick brown fox jumps over the lazy dog!") runtime:`, resultsPangram1.preciseWords, `\n`)

perf.start();
const isPangram2 = isPangram("I like cats, but not mice")
console.log(`isPangram("I like cats, but not mice") result:`, isPangram2)
const resultsPangram2 = perf.stop()
console.log(`isPangram("I like cats, but not mice") runtime:`, resultsPangram2.preciseWords, `\n`)

/* 
the overall time complexity of the isPangram function is O(n), where n is the length of the sentence string. This is because the loop iterates through each character once, and the operations inside the loop are constant time operations.

 */



function findLongestWord(words) {
    let longestLength = 0;

    for (const word of words) {
        if (word.length > longestLength) {
            longestLength = word.length;
        }
    }

    return longestLength;
}

// Test case
// console.log(findLongestWord(["hi", "hello"])); // Output: 5

perf.start();
const longestWord = findLongestWord(["hi", "hello"]);
console.log(`ifindLongestWord(["hi", "hello"]) result:`, longestWord)
const resultslongestWord = perf.stop()
console.log(`findLongestWord(["hi", "hello"]) runtime:`, resultslongestWord.preciseWords, `\n`)

/*
The function uses a constant amount of space for its own variables (longestLength, word) that do not depend on the input size. This contributes to a space complexity of O(1).

The input list of words (words) is passed as a parameter and is not being modified within the function. Therefore, the space taken by the input list is not considered as part of the space complexity of the function.

So, the space complexity of the findLongestWord function is O(1).
*/

console.log(`the end`)