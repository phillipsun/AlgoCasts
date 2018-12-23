// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  debugger;
  return str
    .split("")
    .reverse()
    .join("");
}

reverse("testPhillip");

module.exports = reverse;

// SOLUTION #1
// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

// SOLUTION #2 -- use 'for.. of' if you don't need to get every second or every third element of an array
// if interviewer says not to use .reverse()
// function reverse(str) {
//   let reversed = "";
//   for (let character of str) {
//     reversed = character + reversed;
//     debugger;
//   }
//   return reversed;
// }

// SOLUTION #3
// function reverse(str) {
//   return str.split("").reduce((reversed, character) => {
//     return character + reversed;
//   }, "");
// }

// SOLUTION #4
// function reverse(str) {
//   let reversed = "";
//   for (var i = 0; i < str.length; i++) {
//     reversed = str[i] + reversed;
//   }
//   return reversed;
// }
