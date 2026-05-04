// const arr = [1, 2, 3, 4, 5];

// const modifyArr = arr.map((item) => {
//   return item + 1;
// });

// console.log(modifyArr);

// const modifyArr = arr.map((item) => {
//   return item  * 2;
// });

// console.log(modifyArr);

// const names = ["owais", "aHmed", "saaD", "muzAmmil", "asad"];

// const modifyArr = names.map((arrItem) => {
//     return arrItem.at(0).toUpperCase() + arrItem.slice(1).toLowerCase();
// });

// console.log(modifyArr);

// const str = 'hello';
// const strToArr = str.split("");
// console.log(strToArr);

// const fruits = ["apple", "banana", "mango"];
// const arrToStr = fruits.join(' ');
// console.log(arrToStr);

// const str = "mom";
// const reverseData = str.split('').reverse().join('');
// // console.log(reverseData);

// if (str == reverseData) console.log(`${str} is a palindrome`);
// else console.log(`${str} is not a palindrome`);

// const ul = document.getElementById("ul");
// const names = ["Owais", "Ahmed", "Saad", "Muzammil", "asad"];

// ul.innerHTML = names.map((itemName) => {
//   return `<li> ${itemName} </li>`;
// }).join('')

const nums = [5, 4, 10, 88, 101, 6];
const actualSorting = nums.sort((a, b) => {
  //   return a - b;
  return b - a;
});
console.log(actualSorting);
