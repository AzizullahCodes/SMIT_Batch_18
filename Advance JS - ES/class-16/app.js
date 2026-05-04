// let a = 1; // Global

// const scopingTest = () => {
//   let b = 2; // Lexical scope

//   const inner = () => {
//     let c = 3;
//     console.log("c: ", c);
//     console.log("b: ", b);
//   };

//   inner();

//   // console.log("c: ", c);
//   console.log("b: ", b);
//   console.log("a: ", a);
// };

// scopingTest();

// // console.log("c: ", c);
// // console.log("b: ", b);
// console.log("a: ", a);

// const outerHandler = () => {
//   return "Hello Ahmed";
// };

// console.log(outerHandler());

// const outerHandler = () => {
//   let count = 0;

//   const innerHandler = () => {
//     count++;
//     console.log(count);
//   };

//   return innerHandler;
// };

// const res = outerHandler();
// res();
// res();
// res();
// res();

const createBankAcc = (user) => {
  // console.log("User: ", user);
  let balance = 0;

  const deposit = (amount) => {
    balance = balance + amount;
    console.log(`${user} deposited amount of ${amount}rs.`);
  };

  const getBal = () => {
    console.log(`Your balance is ${balance}`);
  };

  const withDraw = (amount) => {
    if (amount > balance) {
      console.log("Insufficient balance!");
    }

    else {
      balance = balance - amount;
      console.log(`${user} ne ${amount} pese nikal lie hen`);
    }
  };

  return {
    deposit,
    getBal,
    withDraw
  };
};

let acc = createBankAcc("Ahmed");
acc.deposit(100);
acc.withDraw(40);
acc.deposit(50);
acc.getBal();
// acc.withDraw(500);