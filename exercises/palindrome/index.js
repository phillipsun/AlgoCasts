// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // reverse a string and set it to a constant
  const reversed = str
    .split("")
    .reverse()
    .join("");

  // compare original string with reversed string
  return str === reversed;
}

module.exports = palindrome;

// Solution #1
// function palindrome(str) {
//   // reverse a string and set it to a constant
//   const reversed = str
//     .split("")
//     .reverse()
//     .join("");

//   // compare original string with reversed string
//   return str === reversed;
// }

// Solution #2
// Not an ideal solution but it works and makes use of array helper method .every()
// function palindrome(str) {
//   return str.split("").every((char, i) => {
//     return char === str[str.length - i - 1];
//   });
// }
