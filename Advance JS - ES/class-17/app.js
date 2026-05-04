// // const hof = (a, b, cb) => {
// //   return cb(a, b);
// // };

// // const addHandler = (n1, n2) => {
// //   console.log("N1 , N2: ", n1, n2);
// //   let add = n1 + n2;
// //   console.log(add);
// // };

// // hof(2, 4, addHandler);

// const sayHello = (greetMsg) => {
//   // console.log(greetMsg);
//   return () => {
//     return greetMsg;
//   }
// }

// const res = sayHello('Hello');
// console.log(res());

// const fruits = ["apple", "mango", "orange"];
// const isItemExist = fruits.includes('banana');
// console.log(isItemExist);

// const fruits = ["apple", "banana", "mango", "orange"];

// if (!fruits.includes("banana")) {
//   fruits.push("banana");
// } else {
//   fruits.splice(1, 1);
// }

// console.log(fruits);

const fruits = ["apple", "banana", "mango", "orange", "dates"];
console.log(fruits.at(0));
console.log(fruits.at(1));
console.log(fruits.at(-1));
