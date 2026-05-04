// var div = document.getElementById("container");

// var h1 = document.createElement('h1');
// var h1Text = document.createTextNode('I am h1 created by JS');
// h1.appendChild(h1Text);
// div.appendChild(h1);
// console.log(h1);

// console.log(h1Text.nodeValue);

// var inputEl = document.getElementById("input");

// function submit() {
//   console.log(inputEl.value);
//   inputEl.value = "";
// }

// var h2 = document.getElementsByTagName("h2");
// console.log(h2);

// for (var i = 0; i < h2.length; i++) {
//   console.log(h2[i]);
//   h2[i].style.color = 'blue';
// }

// var init = 0;
// var arr = [1, 2, 3, 4, 5];

// function next() {
//   console.log(arr[init]);
//   init++;

//   if (init == arr.length) {
//     init = 0;
//   }
// }

var init = 0;
var images = document.getElementsByTagName("img");

for (var i = 0; i < images.length; i++) {
  // console.log(images[i]);
  images[i].style.display = "none";
}

images[init].style.display = "block";
