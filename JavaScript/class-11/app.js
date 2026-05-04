// for (var i = 1; i <= 3; i++) {
//   console.log("i " + i);

//   for (var j = 1; j <= 2; j++) {
//     console.log(i * j);
//   }
// };

// var alphabets = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];
// var vowels = [];

// for (var i = 0; i < alphabets.length; i++) {
//   // console.log(alphabets[i]);

//   if (
//     alphabets[i] == "a" ||
//     alphabets[i] == "e" ||
//     alphabets[i] == "i" ||
//     alphabets[i] == "o" ||
//     alphabets[i] == "u"
//   ) {
//     vowels.push(alphabets[i]);

//     var keyToDelete = alphabets.indexOf(alphabets[i]);
//     alphabets.splice(keyToDelete, 1);
//   }
// }

// console.log("Consonants: ", alphabets);
// console.log("Vowels: ", vowels);

var arr = ["apple", "banana", "mango", "apple", "orange", "mango"];
var uniqueArr = [];

for (var i = 0; i < arr.length; i++) {
  var key = arr.indexOf(arr[i]);
  console.log(key , i);
  if (key == i) {
    uniqueArr.push(arr[i]);
  }
}

console.log("Unique Data: ", uniqueArr);