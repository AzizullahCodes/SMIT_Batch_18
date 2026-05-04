// const obj = {
//   name: "Ali",
//   area: "Nazimabad",
// address: {
//   house: {
//     addressLine1: "Line 1",
//     addressLine2: "Line 2",
//   },
//   streetNo: 12,
// },
// };

// console.log(obj.address.house);
// console.log(obj['area']);
// console.log(obj.postalCode);

// const userName = "Ahmed";
// const area = "Nazimabad";
// const city = "Karachi";

// const obj = {
//   userName,
//   area,
//   city,
// };

// console.log(obj);

// const isSenior = false;

// const conditionToCheck = isSenior ? "Senior" : "Junior";
// console.log(conditionToCheck);

// if (isSenior) {
//   console.log('Senior');
// }

// else {
//   console.log('Junior');
// };

// const input = prompt('Enter any number');
// const checkEven = ( input % 2 == 0 ) ? ('Even') : ('Odd')
// console.log(checkEven);

const friends = ["mehran", "kashan", "shahzaib", "khurram", "anees", "arsalan"];
const input = prompt("Enter your friend name?");
console.log("Index: ", friends.indexOf(input));
const conditionToCheck =
  friends.indexOf(input) != -1 ? "He is my friend" : "He is not my friend";
console.log(conditionToCheck);
