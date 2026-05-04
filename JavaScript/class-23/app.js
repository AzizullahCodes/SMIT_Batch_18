// var ul = document.getElementById("ul");
// var targetArea = ul.firstElementChild;
// var targetArea = ul.lastElementChild;
// var targetArea = ul.firstElementChild.innerHTML;
// console.log(targetArea);

// var targetLi = document.getElementById("services-el");
// var targetArea = targetLi.previousElementSibling;
// var targetArea = targetLi.nextElementSibling;
// console.log(targetArea);

// var h3 = document.createElement('h3');
// var h3Text = document.createTextNode('I am h3 element');
// h3.appendChild(h3Text);
// console.log(h3Text.nodeValue);

var imgEl = document.getElementById("img-el");

function handleAttr() {
  imgEl.removeAttribute('title');
  console.log(imgEl);
};