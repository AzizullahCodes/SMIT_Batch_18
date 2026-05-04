// const myFirstPromise = new Promise((resolve, reject) => {
//   const num = 13;

//   if (num % 2 == 0) resolve("Promise resolved successfully");
//   else reject("Promise rejected");
// });
// // console.log(myFirstPromise);

// myFirstPromise
//   .then((successRes) => {
//     console.log("Success: ", successRes);
//   })
//   .catch((errRes) => {
//     console.log("Error: ", errRes);
//   });

// const mySecondPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Seconds promise has been resolved");
//   }, 3000);
// });

// mySecondPromise.then((successRes) => {
//   console.log("DOne: ", successRes);
// });

// API: Application Programming Interface...!

const handleApiCall = () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  // const res = fetch(apiUrl);
  // console.log(res);

  fetch(apiUrl)
    .then((successRes) => {
      // console.log("Api Integrated: ", successRes.json());
      return successRes.json();
    })
    .then((actualData) => {
      console.log("Api data: ", actualData);
    })
    .catch((errRes) => {
      console.log("Err in api integration: ", errRes);
    });
};

handleApiCall();
