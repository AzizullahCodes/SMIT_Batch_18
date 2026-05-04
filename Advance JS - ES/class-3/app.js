const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");

function clearInputs() {
  userName.value = "";
  userEmail.value = "";
  userPassword.value = "";
}

function submitForm() {
  const user = {
    name: userName.value,
    email: userEmail.value,
    password: userPassword.value,
  };
  console.log(user);

  // Saving data in DB...!
  localStorage.setItem("User", JSON.stringify(user));
  console.log("Ligged in success!");
  window.location.href = "./home.html";
  clearInputs();
}

function checkIsLoggedIn() {
  const authUser = localStorage.getItem("User");
  // console.log('Auth user: ' , authUser);

  if (authUser != null) {
    window.location.href = "./home.html";
  }
}
