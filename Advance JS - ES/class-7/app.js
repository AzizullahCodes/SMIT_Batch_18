// const checkBoxEl = document.getElementById("cBox");
// const passwordEl = document.getElementById("password");

// const handleCheckBox = () => {
//   // console.log(checkBoxEl.checked);

//   checkBoxEl.checked
//     ? (passwordEl.type = "text")
//     : (passwordEl.type = "password");

//   // if ( checkBoxEl.checked ) {
//   //   passwordEl.type = 'text';
//   // }

//   // else {
//   //   passwordEl.type = 'password';
//   // }
// };

// const handlePassword = () => {
//   console.log(passwordEl.value);
// };

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// // const mixed = arr1.concat(arr2);
// const mixed = [...arr1, ...arr2];
// console.log(mixed);

// const user = {
//   firstName: "Muhammad",
//   lastName: "Ahmed",
// };

// const userData = {
//   title : "SE",
//   isSenior : true,
//   ...user
// }

// console.log(userData);

// const inputEl = document.getElementById("input");
// let arr = [1, 2, 3];

// const add = () => {
//   const arrClone = [...arr];
//   // const arrClone = arr.slice(0);
//   arrClone.push(inputEl.value);
//   arr = arrClone;
//   console.log(arr);;
//   inputEl.value = "";
// };

const userData = {
  firstName: "Muhammad",
  lastName: "Ahmed",
  title: "SE",
  isSenior: true,
};

const { firstName , title , ...rest } = userData;
console.log(rest);