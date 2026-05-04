const email = document.getElementById("email");
const password = document.getElementById("password");
const activeEl = document.getElementsByClassName("active");
const loginEl = document.getElementById("login");
const cpEl = document.getElementById("cp");
const section1El = document.getElementById("section_1");
const section2El = document.getElementById("section_2");

const register = () => {
  const obj = {
    email: email.value,
    password: password.value,
  };
  console.log("User: ", obj);
  email.value = "";
  password.value = "";
};

const loginHandler = () => {
  cpEl.removeAttribute("class");
  loginEl.setAttribute("class", "active");
  section2El.style.display = 'none';
  section1El.style.display = "block";
};

const createPassHandler = () => {
//   console.log(activeEl[0]);
  loginEl.removeAttribute("class");
  cpEl.setAttribute("class", "active");
  section1El.style.display = 'none';
  section2El.style.display = "block";
};
