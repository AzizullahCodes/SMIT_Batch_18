// 10, 5, 44, 70, 51;

// var maxVal = Math.max(10, 5, 44, 70, 51);
// console.log(maxVal);

// var minVal = Math.min(10, 5, 44, 70, 51);
// console.log(minVal);

// var powVal = Math.pow(5, 3);
// console.log(powVal);

// console.log(Math.abs(4));
// console.log(Math.abs(5));
// console.log(Math.abs(1));
// console.log(Math.abs(-5));
// console.log(Math.abs(-20));

// console.log(Math.sqrt(81));
// console.log(Math.sqrt(9));
// console.log(Math.sqrt(100));
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(49));
// console.log(Math.sqrt(52));

// console.log(Math.round(2));
// console.log(Math.round(2.2));
// console.log(Math.round(3.4));
// console.log(Math.round(4.6));
// console.log(Math.round(5.9));
// console.log(Math.round(10));
// console.log(Math.round(0.4));

// console.log(Math.ceil(2));
// console.log(Math.ceil(2.2));
// console.log(Math.ceil(3.4));
// console.log(Math.ceil(4.6));
// console.log(Math.ceil(5.9));
// console.log(Math.ceil(10));
// console.log(Math.ceil(0.4));

// console.log(Math.floor(2));
// console.log(Math.floor(2.2));
// console.log(Math.floor(3.4));
// console.log(Math.floor(4.65464));
// console.log(Math.floor(5.965));
// console.log(Math.floor(10));
// console.log(Math.floor(0.4));

// var randomVal = Math.random();
// console.log(randomVal);

// var dice = Math.random() * 6;
// dice = Math.floor(dice);
// console.log(dice + 1);

// dice = Math.ceil(dice);
// var dice = Math.floor(Math.random() * 6) + 1;
// var dice = Math.ceil(Math.random() * 6);
// console.log(dice);

// var fruits = ["apple", "mango", "banana", "grapes", "dates"];
// var randomIndex = Math.floor(Math.random() * fruits.length);
// console.log(fruits[randomIndex]);

var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var small = "abcdefghijklmnopqrstuvwxyz";
var digits = "0123456789";
var specialChars = "!@";
var allChars = capital + small + digits + specialChars;
var passwordLength = 5;
var newPassword = "";

for (var i = 1; i <= passwordLength; i++) {
  // console.log(i);

  var randomIndex = Math.floor(Math.random() * allChars.length);
  console.log(randomIndex);
  newPassword = newPassword + allChars[randomIndex];
}

console.log(newPassword);