// const str = "aaabbccccdzzzzz";
// let obj = new Map();

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
//   if (obj.has(str[i])) {
//     obj.set(str[i] , obj.get(str[i]) + 1);
//   }

//   else {
//     obj.set(str[i], 1);
//   }
// }

// console.log(obj);

// let str = prompt('Enter any string');
// let spaceFound = false;

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i] , i);
//   if (str[i] == " " && str[i - 1] == " ") {
//     spaceFound = true;
//     break;
//   }
// }

// if (spaceFound) {
//   console.log("Space found!");
// } else {
//   console.log("Can't found any space!");
// }

// const obj = new Map();
// obj.set(1, "one");
// obj.set(2, "two");
// obj.set(3, "three");

// console.log(obj.keys());
// console.log( obj.values() );

// const obj = {
//   firstName: "Muhammad",
//   lastName: "Ahmed",
//   title: "Senior Dev",
//   shift: "Morning",
//   city: "Karachi",
// };

// const objProps = Object.keys(obj);
// console.log(objProps);

// const objValues = Object.values(obj);
// console.log(objValues);

// const props = Object.entries(obj);
// console.log(props);

// obj.country = 'PK';
// console.log(obj);

// const lockObj = Object.freeze(obj);
// lockObj.country = 'PK';
// console.log(lockObj);

// const checkPorp = Object.hasOwn(obj , 'cityyy');
// console.log(checkPorp);

// const validate = Object.is("ahmed", "ahmed");
// console.log(validate);

// const validate = Object.is(10, 20);
// console.log(validate);

// const obj = {
//   firstName: "Muhammad",
//   lastName: "Ahmed",
//   title: "Senior Dev",
//   shift: "Morning",
//   city: "Karachi",
// };

// const freezeObj = Object.freeze(obj);
// // freezeObj.country = 'PK';
// // delete freezeObj.city;
// freezeObj.city = "Islamabad";
// // console.log(freezeObj);

// const newObj = {
//   one: 1,
//   two: 2,
// };

// const isFreeze = Object.isFrozen(newObj);
// console.log(isFreeze);

// const obj = {
//   firstName: "Muhammad",
//   lastName: "Ahmed",
//   title: "Senior Dev",
//   shift: "Morning",
//   city: "Karachi",
// };

// const sealObj = Object.seal(obj);
// // sealObj.country = "PK";
// // delete sealObj.city;
// sealObj.city = "Islamabad";
// console.log(sealObj);

// const isSeal = Object.isSealed(newObj);
// console.log(isSeal);

// const products = [
//   {
//     productName: "Apple",
//     category: "Fruit",
//   },
//   {
//     productName: "Orange",
//     category: "Fruit",
//   },
//   {
//     productName: "Tomato",
//     category: "Vegetables",
//   },
//   {
//     productName: "Bat",
//     category: "Sports",
//   },
// ];

// const groupByCat = Object.groupBy(
//   products,
//   (each) => {
//     return each.category
//   }
// );
// console.log(groupByCat);

// const nums = [1, 2, 3, 4, 5, 6];
// const evenAndOddGroup = Object.groupBy(
//   nums,
//   (n) => {
//     return n % 2 == 0 ? 'Even' : 'Odd'
//   }
// );

// console.log(evenAndOddGroup);

// const users = [
//   {
//     userName: "Ahmed",
//     age: 29,
//   },
//   {
//     userName: "Aizaz",
//     age: 33,
//   },
//   {
//     userName: "Mehran",
//     age: 29,
//   },
// ];

// const groupByAge = Object.groupBy(
//   users,
//   (item) => { return item.age }
// );

// console.log(groupByAge);

// const animals = ["cat", "dog", "fox", "mouse"];

// const groupByLength = Object.groupBy(
//   animals,
//   (abc) => {
//     return abc.length
//   }
// );

// console.log(groupByLength);

const products = [
  {
    productName: "Apple",
    category: "Fruit",
  },
  {
    productName: "Orange",
    category: "Fruit",
  },
  {
    productName: "Tomato",
    category: "Vegetables",
  },
  {
    productName: "Bat",
    category: "Sports",
  },
];

let obj = {};

for (let i = 0; i < products.length; i++) {
  // console.log(products[i]);

  if ( obj.hasOwnProperty(products[i].category) ) {
    console.log('Yes');
  }

  else {
    obj[products[i].category] = [];
  }
}

console.log(obj);