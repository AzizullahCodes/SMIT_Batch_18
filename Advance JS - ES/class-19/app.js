let users = [
  {
    id: 1,
    userName: "Faraz",
    title: "CTO",
    shift: "Morning",
    maritalStatus: true,
  },
  {
    id: 2,
    userName: "Aizaz",
    title: "Senior Designer",
    shift: "Morning",
    maritalStatus: true,
  },
  {
    id: 3,
    userName: "Umer",
    title: "Bykea Rider",
    shift: "Night",
    maritalStatus: true,
  },
  {
    id: 4,
    userName: "Ahmed",
    title: "Senior Dev",
    shift: "Morning",
    maritalStatus: true,
  },
  {
    id: 5,
    userName: "Akbar",
    title: "Accountant",
    shift: "Night",
    maritalStatus: false
  },
];

// const fruits = ["apple", "banana", "mango", "grapes"];
// // console.log(fruits);

// const targetFruit = fruits.find((item) => {
//   return item == 'mango';
// });

// console.log(targetFruit);

// const targetUser = users.find((user) => {
//   return user.id == 2;
// });

// console.log(targetUser);

// const targetIndex = users.findIndex((user) => {
//   return user.id == 3;
// });
// console.log(targetIndex);

// let targetUser = users.find((user) => {
//   return user.id == 3;
// });
// targetUser.userName = "Muhammad Umer Rana";
// console.log(targetUser);

// users.splice(targetIndex, 1, targetUser);

// console.log(users);

// const fruits = ["apple", "banana", "mango", "grapes"];

// fruits.forEach((item) => {
//   console.log(item);
// });

// for ( let user of users ) {
//   console.log(user);
// }

// users.forEach((user) => {
//   console.log(user);
// });

// const conditionToCkeck = users.some((item) => {
//   return item.shift == "Morning";
// });

// console.log(conditionToCkeck);

const conditionToCkeck = users.every((item) => {
  return item.maritalStatus;
});

console.log(conditionToCkeck);