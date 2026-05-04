// const sayHelloToUser = (username, cb) => {
//   console.log(`Hello ${username}`);
//   cb();
// };

// const iAmCallBack = () => {
//   console.log("Callback function is executed!");
// };

// sayHelloToUser("Ahmed", iAmCallBack);

// const sayHelloToUser = (username, cb) => {
//   console.log(`Hello ${username}`);
//   cb();
// };

// sayHelloToUser("Ali", () => {
//   console.log("I am callback handler!");
// });

// const setTimeout = ( cb , time) => {
//   console.log(`Hello ${username}`);
//   cb();
// };

// const h2 = document.getElementById("h2");

// setTimeout(() => {
//   alert("Hello 123");
// }, 3000);

// setTimeout(() => {
//   h2.innerHTML = "I am h2";
// }, 5000);

const inputEl = document.getElementById("input");
const showErr = document.getElementById("err-box");

const submitForm = () => {
  if (!inputEl.value) {
    showErr.innerHTML = 'Username is required';
    showErr.style.display = 'block';

    setTimeout( () => {
      showErr.style.display = 'none';
    } , 3000 );
  }
  
  else {
    console.log(inputEl.value);
    inputEl.value = "";
  }
};
