// var arr = ["Muhammad", "Ahmed", "Ali", 50, true];
// arr[5] = 'Tomamto';

// Note: Add data in the last
// arr.push('Tomamto');
// arr.push('Mouse');

// Note: Remove data from the last
// arr.pop();
// arr.pop();

// arr.unshift('Hello');

// arr.shift();

// console.log(arr);
// console.log(arr.length);

// var arr = ["Muhammad", "Ahmed", "Ali", 50, true , 'apple'];
// var lastElement = arr[arr.length - 1];

// if ( lastElement == 'apple' ) {
//     arr.pop();
// }

// else {
//     arr.push('apple');
// }

// console.log(arr);

// var arr = ["Muhammad", "Ahmed", "Ali", 50, true, "apple", "Ali"];
// // var checkIndex = arr.indexOf("azbc");
// var checkIndex = arr.lastIndexOf('Ali');

// console.log(checkIndex);

// // consonants

var vowels = ["a", "e", "i", "o", "u"];
var input = prompt('Enter any character');

if ( vowels.indexOf(input) != -1 ) {
    console.log('Yes! It"s a vowel.');
}

else {
    console.log('It"s a consonant not a vowel.');
}