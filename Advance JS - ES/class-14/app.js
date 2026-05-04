// let count = 0;

// let interval = setInterval(() => {
//   count = count + 1;
//   console.log(count);

//   if (count == 5) {
//     clearInterval(interval);
//   }
// }, 1000);

// const h1 = document.getElementById("h1");
// // console.log(date);

// setInterval(() => {
//   const date = new Date().toLocaleTimeString();
//   h1.innerHTML = date;
// }, 1000);

const div = document.getElementById("div");
const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "black",
  "white",
];

setInterval(() => {
  let randomNum = Math.floor(Math.random() * colors.length);
  console.log(randomNum);
  div.style.backgroundColor = colors[randomNum];
}, 2000);
