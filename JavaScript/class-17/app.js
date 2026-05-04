// var total = 2 + 4;
// console.log(total);

// // 6 , 10

// return

// function addValues(n1, n2) {
//   var total = n1 + n2;
//   return total;
// }

// var output = addValues(4, 6);
// console.log(output);

// var finalTotal = 50 + addValues(10 , 20);
// console.log(finalTotal);

// var greetMessage = 'Hello';

// function mergeUser(name1 , name2) {
//     var fullName = name1 + ' ' + name2;
//     return fullName;
// };

// var greeting = greetMessage + ' ' + mergeUser('muhammad' , 'ali');
// console.log(greeting);

// a2 - 2ab + b2

// function handleSquareVal(n) {
//   return n * n;
// }

// function solveEquation(n1, n2) {
//     var eq = handleSquareVal(n1) - (2 * n1 * n2) + handleSquareVal(n2);
//     console.log(eq);
// }

// solveEquation(6, 3);

// var a = 10;

// function myFunction() {
//   console.log("a1", a);

//   var b = 20;
//   console.log("b1", b);
// }

// myFunction();

// console.log("a2", a);
// console.log("b2", b);

// var x = 1;

// function testing() {
//   var x = 5;
//   console.log("x inner", x);
// }

// testing();

// console.log("x outer", x);

// length * width | calculate area of triangle
// Count Vowels in a String | JavaScript

var count = 0;
function checkVowels(str) {
  for (var i = 0; i < str.length; i++) {
    // console.log(str[i]);

    if ("aeiou".indexOf(str[i]) != -1) {
      count++;
    }
  }

  console.log("Vowels count: ", count);
}

checkVowels("javascript");
