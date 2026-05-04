// const arr = ["apple", "banana", "mango", "orange"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let fruit of arr) {
//   console.log(fruit);
// }

// const obj = {
//   userName: "Ahmed",
//   title: "SE",
//   shift: "Morning",
//   isSenior: true,
// };
// console.log(obj);

// for (let key in obj) {
//   console.log(`${key} - ${obj[key]}`);
// }

// const obj = {
//   userName: "Ahmed",
//   title: "SE",
//   shift: "Morning",
//   isSenior: true,
// };
// // console.log(obj.userName);
// console.log( obj['title'] );

// const arr = [1, 2, 3, 4];
// // console.log(arr);

// const [a, b, c, d] = arr;
// console.log(c);

// const arr = ["Ahmed", "ahmed@gmail.com", "SE", "ABC Corp", ["Html", "Css"]];
// const [userName, email, title, company, [skill1, skill2]] = arr;
// console.log(skill1 , skill2);

const obj = {
  userName: "Ahmed",
  title: "SE",
  shift: "Morning",
  isSenior: true,
  address: {
    houseNo: "F1",
    street: "Street 10",
  },
};
const {
  userName,
  title,
  shift,
  isSenior,
  address: { street, houseNo },
} = obj;
console.log(houseNo);
