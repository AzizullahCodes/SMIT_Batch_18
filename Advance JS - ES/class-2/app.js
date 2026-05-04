/*
String
Number
Boolean
Array
Object
*/

let userDetails = {
  email: "abc@xyz.com",
  password: "1234",
};

// let dataInStr = JSON.stringify(userDetails);

localStorage.setItem("User", JSON.stringify(userDetails));
localStorage.setItem("Uid", JSON.stringify("abc123"));

function getDataFromDB() {
  // const fetchData = localStorage.getItem('User');
  // // const convertToOrigional = JSON.parse(fetchData);
  // console.log(fetchData);
  // localStorage.removeItem('User');
  // alert('User deleted');

  // localStorage.clear();
  // window.location.reload();
  window.location.href = "./user.html";
}


// console.log(window);