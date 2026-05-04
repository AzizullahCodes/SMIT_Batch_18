// function greetUser(user) {
//   console.log("Hello " + user);
// }

// greetUser('Ahmed');
// greetUser('Umer');
// greetUser('Asad')

// function sumTwoValues(n1, n2) {
//     var add = n1 + n2;
//     console.log(add);
// }

// sumTwoValues(5, 7);

// function renderUsers(users) {
// //   console.log(users);

//   if (users.length > 0) {
//     for (var i = 0; i < users.length; i++) {
//       console.log(users[i]);
//     }
//   }
// }

// var arr = ["John", "Smith", "Mark", "Prince"];
// // arr.length = 0;
// renderUsers(arr);

// function greetUser(user) {
//   console.log("Hi " + user);
// }

// function checkUser(paramUser) {
// //   console.log(paramUser);

//   var friendList = ["Ahmed", "Mark"];

//   if (friendList.indexOf(paramUser) != -1) {
//     greetUser(paramUser);
//     renderUsers(friendList);
//   }

//   else {
//     console.log(paramUser + " is not my friend");
//   }
// }

// checkUser("Ahmed");

// function playGame(n) {
//   console.log("User val: " + n);

//   var computerVal = Math.floor(Math.random() * 6);
//   console.log("Computer val: " + computerVal);

//   if (computerVal == n) {
//     console.log("Draw");
//   } else if (n > computerVal) {
//     console.log("User won the match");
//   } else if (n < computerVal) {
//     console.log("Computer won the match");
//   }
// }

var num1Val = "";

function handleOne(num) {
    console.log(num);
    num1Val = num;
}