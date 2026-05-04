const ul = document.getElementById("ul");

const viewUser = (uid) => {
  console.log("User: ", uid);
  localStorage.removeItem('User Id');
  localStorage.setItem("User Id", JSON.stringify(uid));
  window.location.href = "./view.html";
};

const renderData = (users) => {
  console.log("Users: ", users);
  ul.innerHTML = users
    .map((item, index) => {
      return (
        "<li>" + item?.name + "<button onclick='viewUser(" + item.id + ")'> View </button> </li>"
      );
    })
    .join("");
};

const handleApiIntegrate = () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  fetch(apiUrl)
    .then((res) => {
      // console.log("Response: ", res.json());
      return res.json();
    })
    .then((actualData) => {
      // console.log("Api data: ", actualData);
      actualData.length > 0 && renderData(actualData);
    })
    .catch((err) => {
      console.log("Err in api integration: ", err);
    });
};

handleApiIntegrate();
