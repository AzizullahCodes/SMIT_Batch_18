// var obj = {
//   employeeName: "John Smith",
//   title: "Graphics Designer",
//   companyName: "ABC Company",
//   shift: "Morning",
//   isSenior: false,
// };

// obj.qualification = "Intermediate";

// delete obj.shift;
// delete obj.isSenior;

// var shift = "shift"; // Morning , Night
// console.log(shift);
// console.log(obj.employeeName);
// console.log( obj[title] );
// console.log( obj[shift] );

// console.log( obj[shift] );

// var arr = ["a", " b", "c"];
// console.log(arr[0], typeof arr);

// var isPropsExist = obj.hasOwnProperty("nightShift");
// console.log(isPropsExist);

// var isPropsExist = "hello" in obj;
// console.log(isPropsExist);

// var msgObj = {
//   message: "How are you",
//   messageTime: "09:00:00 AM",
//   isSeen: false,
//   userId: "abc123",
// };

// var msgsData = [
//   "How are you",
//   "I am fine",
//   "Tell us something"
// ]

var users = [
  {
    userId: 1,
    userName: "ali",
    title: "Software Engineer",
    shift: "Morning",
  },
  {
    userId: 2,
    userName: "aizaz",
    title: "Graphics Designer",
    shift: "Morning",
  },
  {
    userId: 3,
    userName: "Osama",
    title: "Sales Executive",
    shift: "Night",
  },
  {
    userId: 4,
    userName: "rafay",
    title: "Software Engineer (B.E)",
    shift: "Night",
  },
];

for (var i = 0; i < users.length; i++) {
  // Task 1
  // var modifyUserName = users[i].userName.charAt(0).toUpperCase() +
  // users[i].userName.slice(1).toLowerCase();
  // console.log(modifyUserName);

  // Task 2
  if (users[i].shift == 'Morning') {
    console.log(users[i]);
  }
}
