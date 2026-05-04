// var obj = {
//   userName: "Prince",
// };

// // console.log(obj.userName);
// // console.log(obj['userName']);

// obj.title = "ASE";
// obj["shift"] = "Morning";
// console.log(obj);

// var input = prompt("How many props should object has?");
// var obj = {};

// for (var i = 1; i <= input; i++) {
//   var prop = prompt("Enter property no " + i);
//   var value = prompt("Enter value no " + i);

//   obj[prop] = value;
// }
// console.log(obj);

// var numbers = [1, 2, 3, 4, 5];
// array item x 2

// var arr = ["a", "h", "m", "e", "d"];

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr);
//   var lastItem = arr.pop();
//   arr.unshift(lastItem);
// };

// faheem , raheel , muhammad

var str = "muhammad";

for (var i = 0; i < str.length; i++) {
  console.log(str[i]);

  if ( str[i] == str[i - 1] ) {
    console.log('Double character found!!!');
    break;
  };
};