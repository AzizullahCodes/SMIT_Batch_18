// document.writeln('<h1>Hello JS</h1>');

var h1El = document.getElementById('head');
// console.log(h1El);

// h1El.innerHTML = 'Hi JS';
// h1El.innerText = 'Html and Css class';

// h1El.style.color = 'red';

var imgEl = document.getElementById('img');

function mouseIn() {
  imgEl.src = './images/hen.jpg';
  h1El.innerHTML = 'Hen';
}

function mouseOut() {
  imgEl.src = "./images/duck.jpg";
  h1El.innerHTML = 'Duck';
}