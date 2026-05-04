// let userName = "Ahmed";
// let email = "abc@xyz.com";
// let password = "";

// // if (userName == "") {
// //     alert('User name is required');
// // }

// // else if (email == "") {
// //     alert('Email is required');
// // }

// // else if (password == "") {
// //     alert('Password is required');
// // }

// const handleValidation = () => {
//   try {
//     if (userName == "") throw "User name is required";
//     else if (email == "") throw "Email is required";
//     else if (password == "") throw "Password is required";
//     else {
//       const obj = { userName, email, password, };
//       console.log(obj);
//     }
//   } catch (error) {
//     console.log("Catch Err: ", error);
//     if (error) alert(error);
//   }
// };

// // const hello = () => console.log('Hello World');

// // hello();

// // for (let i = 1; i <= 5; i++) console.log(i);

// const recursivePractice = () => {
//     let input = prompt('Enter your name');
//     if (!input) recursivePractice();
//     else console.log(input);
// };

// recursivePractice();

const recursivePractice = (n) => {
  //   console.log(n);
  if (n == 1) return;
  return n * recursivePractice(n - 1);
};

// // const res = recursivePractice(5);
// console.log(recursivePractice(5));


const handleNum = (n) => {
    return; 
}

console.log(handleNum(5));