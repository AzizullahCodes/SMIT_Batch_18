// const arr = ["apple", "banana", "mango"];
// const obj = {
//   userName: "Ahmed",
// };

// // const arrayChecker = Array.isArray(obj);
// // console.log(arrayChecker);

// if ( Array.isArray(arr) && arr.length > 0 ) {
// }

// const nums = [1000, 8, 1, 6, 4, 45, 14];
// const sortedData = nums.sort();
// console.log(sortedData);

// const data = ["banana", "orange", "apple", "mango", "dates"];
// const sortedData = data.sort();
// console.log(sortedData);

// const arr = ["a", "h", "m", "e", "d"];
// const reverseData = arr.reverse();
// console.log(reverseData);

// const str = 'ahmed';
// const condition = str.startsWith('h');
// console.log(condition);

// const str = 'ahmed';
// const condition = str.endsWith('a');
// console.log(condition);

// const names = ["ahmed", "ali", "umer", "akbar", "owais"];

// const filterData = names.filter((item) => {
//   return item.startsWith('a');
// });

// console.log(filterData);

// const nums = [1000, 8, 1, 6, 4, 45, 14];

// const filterData = nums.filter((num) => {
//   // console.log(num);
//   return num > 5;
// });
// console.log(filterData);

const input = prompt('Enter your shift!')
const users = [
  {
    userName: "Ahmed",
    title: "Senior Dev",
    shift: "Morning",
  },
  {
    userName: "Aizaz",
    title: "Senior Designer",
    shift: "Morning",
  },
  {
    userName: "Umer",
    title: "Bykea Rider",
    shift: "Night",
  },
  {
    userName: "Akbar",
    title: "Accountant",
    shift: "Night",
  },
];

const filterUsers = users.filter((user) => {
    return user?.shift?.toLowerCase() == input?.toLowerCase();
});

console.log(filterUsers);