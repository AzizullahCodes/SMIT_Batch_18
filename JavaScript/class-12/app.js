// var str = 'USER';
// var changeCase = str.toUpperCase();
// var changeCase = str.toLowerCase();
// console.log(changeCase);

// var str = "muhAmmAd";
// var initChar = str[0];
// var remainingChars = str.slice(1);
// var updatedStr = initChar.toUpperCase() + remainingChars.toLowerCase();
// console.log(updatedStr);

// var str = "Muhammad";
// var findIndex = str.indexOf('u');
// var findChar = str.charAt(1);
// console.log(findChar);

// var percentage = (761 * 100) / 850;
// console.log(percentage.toFixed(2));

// var n = 10;
// console.log(n, typeof n);

// var n2 = '10';
// console.log(n2, typeof n2);

// var n = 10.1234565;
// var changeDataType = n.toString();
// var changeDataType = String(n);
// console.log(changeDataType, typeof changeDataType);

// console.log(n.toFixed(2));

// var n = 10;
// var n2 = '5';
// var sum = n + Number(n2);
// console.log(sum);

// var fullName = "Ahmed Khan";
// var updateName = fullName.replace("Khan", "Rana");
// console.log(updateName);

// var fullName = "Hyderabad";
// var updateName = fullName.replace("Hyder", "Islam");
// console.log(updateName);

// var str = "the quick brown fox jump over the lazy dog";
// var updatedStr = str.replaceAll("the", "a");
// console.log(updatedStr);

var arr = [
  "the",
  "quick",
  "brown",
  "fox",
  "jump",
  "over",
  "the",
  "lazy",
  "dog",
];

for (var i = 0; i < arr.length; i++) {
  // console.log(arr[i]);

  if (arr[i] == "the") {
    // arr[i] = arr[i].replace("the", "a");
    arr[i] = "a";
  }
}

console.log(arr);
