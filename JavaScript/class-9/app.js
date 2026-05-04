// for (var i = 1; i <= 4; i++) {
//   console.log("i " + i);

//   for (var j = 1; j <= 3; j++) {
//     console.log("j " + j);
//   }
// }

// for (var i = 1; i <= 3; i++) {
//   for (var j = 1; j <= 2; j++) {
//     console.log(i * j);
//   }
// }

// var fNames = ["Muhmmad", "Syed", "Abdul"];
// var lastNames = ["Ahmed", "Ali", "Mustafa"];

// for (var i = 0; i < fNames.length; i++) {
//   for (var j = 0; j < lastNames.length; j++) {
//     var fullName = fNames[i] + " " + lastNames[j];
//     console.log(fullName);
//   }
// }

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var i = 0; i < fruits.length; i++) {
//   console.log("Element at index " + i + " is " + fruits[i]);
// }

var itemsNo = +prompt("Enter the number of items");
var arr = [];

console.log("Number of Items: ", itemsNo);
console.log("Items");

for (var i = 1; i <= itemsNo; i++) {
  var askForNewItem = prompt("Enter the value for index " + i);
  arr.push(askForNewItem);
}

console.log(arr);