// console.log(window);

// alert('Hello');
// window.alert('Say hi');

// console.log(this);
// THis refers to the object where it belongs to...!

// var obj = {
//   firstName: "Muhammad",
//   lastName: "Ahmed",
//   title: "Dev",
//   intro: function () {
//     console.log(this);
//   },
// };

// var obj = {
//   firstName: "Muhammad",
//   lastName: "Ahmed",
//   title: "Dev",
//   intro: function () {
//     console.log("Hi, My name is", this.firstName + " " + this.lastName);
//   },
// };

// var obj = {
//   firstName: "Muhammad",
//   lastName: "Ahmed",
//   title: "Dev",
//   intro: () => {
//     console.log(this);
//   },
// };

// console.log(obj);
// obj.intro();

// const testing = (el) => {
//   console.log(el);
// }

// const x = 1;
// var x = 1

const handleApiCall = async () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const res = await axios({
    method: "GET",
    url: apiUrl,
  });
  console.log(res);
};

handleApiCall();
