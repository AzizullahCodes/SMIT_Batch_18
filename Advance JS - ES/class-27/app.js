// const handleApiCal = async () => {
//   const apiUrl = "https://jsonplaceholder.typicode.com/users";
//   const res = await fetch(apiUrl);
//   const actualData = await res.json();
//   console.log(actualData);
// };

// handleApiCal();

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// const obj = {
//   firstName: "Muhammad",
//   lastName: "Ahmed",
//   gender: "Male",
//   intro : () => {}
// };
// console.log(obj);

// class MyCar {
//   constructor(carName, modelNo) {
//     this.myCarName = carName;
//     this.myCarModel = modelNo;
//     this.carColor = 'Silver';
//   }

//   greet() {
//     console.log(`Hi, My car model no is ${this.myCarModel}`);
//   }
// }

// const x = new MyCar("Aqua", "abc123");
// console.log(x);
// x.greet();

// const y = new MyCar("Mehran", "xyz123");
// console.log(y);

class User {
  constructor(userName, userId) {
    this.name = userName;
    this.id = userId;
    this.role = "Admin";
  }

  intro() {
    console.log(`Hi, My name is ${this.name}, And my id is ${this.id}`);
  }
}

const user = new User("Ali", "12345");
// console.log(user);
// user.intro();

class Admin extends User {
  constructor(userName, userId, title) {
    super(userName, userId);
    this.myTitle = title;
  }
}

const admin = new Admin("Ahmed", "06789", "ASE");
console.log(admin);
admin.intro();
