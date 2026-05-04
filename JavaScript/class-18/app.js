// var userInput = prompt("Enter your gender");
// // console.log(userInput);

// switch (userInput) {
//   case "male":
//     console.log("Your gender is male");
//     break;

//   case "female":
//     console.log("Your gender is female");
//     break;

//   default:
//     console.log("Invalid gender");
// }

// var day = new Date().getDay().toString();
// console.log(day);

// switch (day) {
//   case "0":
//     console.log("Today is sunday");
//     break;

//   case "1":
//     console.log("Today is monday");
//     break;

//   case "2":
//     console.log("Today is tuesday");
//     break;

//   case "3":
//     console.log("Today is wednesday");
//     break;

//   case "4":
//     console.log("Today is thurday");
//     break;

//   case "5":
//     console.log("Today is friday");
//     break;

//   case "6":
//     console.log("Today is saturday");
//     break;

//   default:
//     console.log("Invalid input!");
// };

var arr = [
  "the",
  "quick",
  "browN",
  "fOx",
  "jump",
  "oveR",
  "the",
  "lazy",
  "dog",
];

for (var i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
  var initialChar = arr[i].charAt(0).toUpperCase();
  var remChar = arr[i].slice(1).toLowerCase();
  var mergeStr = initialChar + remChar;
  // console.log(mergeStr);
  arr[i] = mergeStr;
};

console.log(arr);