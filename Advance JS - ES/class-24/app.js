// const myPromise = new Promise((resolve, reject) => {
//   const n = 3;
//   if (n >= 5) resolve("Promise resolved successfully");
//   else reject("Promise rejected");
// });
// // console.log(myPromise);

// myPromise
//   .then((success) => {
//     console.log("DOne: ", success);
//   })
//   .catch((err) => {
//     console.log("Error: ", err);
//   });

const ul = document.getElementById("ul");

const renderData = (users) => {
  console.log("Users: ", users);
  ul.innerHTML = users.map((item, index) => {
    return (
      `<li> ${item?.name} <button> View </button> </li>`
    );
  }).join('');
};

const handleApiIntegrate = () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  fetch(apiUrl)
    .then((res) => {
      // console.log("Response: ", res.json());
      return res.json();
    })
    .then((actualData) => {
      console.log("Api data: ", actualData);
      actualData.length > 0 && renderData(actualData);
    })
    .catch((err) => {
      console.log("Err in api integration: ", err);
    });
};

handleApiIntegrate();
