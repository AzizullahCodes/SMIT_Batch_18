// var h1El = document.getElementsByTagName("h1");
// console.log(h1El);

// for (var i = 0; i < h1El.length; i++) {
//   console.log(h1El[i]);
//   h1El[i].style.color = 'blue';
// }

// var targetEls = document.getElementsByClassName("bravo");
// console.log(targetEls);
// targetEls[0].style.color = "red";

// var h2El = document.getElementById("head");
// var imgEl = document.getElementById("duck");

// function updateClass() {
// h2El.className = 'heading';
// console.log(imgEl.attributes);

// var isTitleAttrExist = imgEl.hasAttribute('class');
// console.log(isTitleAttrExist);

// var getTitleAttr = imgEl.getAttribute('title');
// console.log(getTitleAttr);

//   imgEl.setAttribute("class", "big");
// }

// function remHandler() {
//   imgEl.removeAttribute('class');
// };

var span = document.getElementById("span-el");

function increaseFontSize() {
  var getFont = span.getAttribute("style").slice(11, 13);
  getFont = Number(getFont);
  getFont = getFont + 2;
  span.style.fontSize = getFont + "px";
}
