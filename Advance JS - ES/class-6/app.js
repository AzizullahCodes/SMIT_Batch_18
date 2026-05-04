// function helloUser() {
//   console.log('Hello!');
// }

// helloUser();

// const handler = function() {
//   console.log('Hello!');
// }

// handler();

// const handler = () => {
//   console.log('Hello!');
// }

// handler();

// const add = (a, b) => {
//   const total = a + b;
//   console.log("Total ", total);
// };

// add(10, 5);

// const greetUser = (user = 'Guest') => {
//   console.log("Hello", user);
// };

// greetUser('Mark');
// greetUser();
// greetUser('Ahmed');

// const add = (a, b = 0) => {
//   const total = a + b;
//   console.log(total);
// };

// add(2);
// add(2, 4);

// const renderNames = (...rest) => {
//   // console.log(name1, name2);
//   console.log(rest);
// };

// renderNames("Ahmed", "Aizaz", "Nick", "Shayan", "Trish");

// const countNums = (...nums) => {
//   let total = 0;

//   for (let n of nums) {
//     // console.log(n);
//     total = total + n;
//   };

//   console.log('Total: ' , total);
// };

// countNums(2, 8, 15, 6, 0, 19);

const largestNum = (...nums) => {
  let largestVal = 0;

  for (let n of nums) {
    // console.log(n);
    if (n > largestVal) {
      largestVal = n;
    }
  }

  console.log("Largest Num: ", largestVal);
};

largestNum(2, 8, 15, 6, 0, 19);
