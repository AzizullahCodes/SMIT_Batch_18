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

// class User {
//   constructor(userName, userId) {
//     this.name = userName;
//     this.id = userId;
//     this.role = "Admin";
//   }

//   intro() {
//     console.log(`Hi, My name is ${this.name}, And my id is ${this.id}`);
//   }
// }

// const user = new User("Ali", "12345");
// console.log(user);
// user.intro();

// class Admin extends User {
//   constructor(userName, userId, title) {
//     super(userName, userId);
//     this.myTitle = title;
//   }
// }

// const admin = new Admin("Ahmed", "06789", "ASE");
// console.log(admin);
// admin.intro();

// Encapsulation in OOP
// class BankAccount {
//   #balance = 0;

//   deposit(amount) {
//     // console.log("Amount: ", amount);
//     this.#balance = this.#balance + amount;
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// const newAcc = new BankAccount();
// newAcc.deposit(50);
// newAcc.deposit(100);
// console.log(newAcc.getBalance());

// Polymorphism...!

// class Animal {
//   speak() {
//     console.log("Animals can speak");
//   }
// }

// class Cat extends Animal {
//   speak() {
//     console.log('Cat can speak');
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log('Dog can speak');
//   }
// }

// const myCat = new Cat();
// const myDog = new Dog();

// myCat.speak();
// myDog.speak();

// class UserService {
//   async getAllUsers() {
//     const apiUrl = "https://jsonplaceholder.typicode.com/users";
//     const response = await fetch(apiUrl);
//     const finalRes = await response?.json();
//     console.log(finalRes);
//   }
// }

// const service = new UserService();
// console.log(service);
// service.getAllUsers();

// let x = 1;
// console.log(x);

// setTimeout(() => {
//   console.log("4");
// }, 3000);

// console.log("2");

// let y = 3;
// console.log(y);

// console.log(2 + 2);

// var x = 1;
// function
// for
// switch
// class
// new Promise
// Date

// let const , () => {} , moment function


const test = () => {
  console.log();
}


function test() {
  console.log();
}