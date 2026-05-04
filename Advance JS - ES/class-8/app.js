// // Shallow copy...!
// const obj = {
//   firstName: "Muhammad",
//   lastName: "Rana",
// };

// const x = obj;
// x.middleName = 'Ahmed'

// console.log(obj);
// console.log("X; ", x);

// Deep copy...!
// const obj = {
//   firstName: "Muhammad",
//   lastName: "Rana",
// };

// const x = { ...obj };
// x.middleName = "Ahmed";
// x.fName = "Munawar";

// const x = JSON.parse(JSON.stringify(obj));
// x.middleName = "Ahmed";
// x.title = 'ASE';

// const x = structuredClone(obj);
// x.middleName = "Ahmed";
// console.log(obj);
// console.log("X; ", x);

// Map Object in JS...!

let mapObj = new Map();
mapObj.set("userName", "Ahmed");
mapObj.set(false, "set to false");
mapObj.set("() => {}", "arrow function as a prop");

// console.log(mapObj.keys());
// console.log(mapObj.values());
console.log(mapObj.entries());

// mapObj.delete('userName');

// mapObj.clear();

// console.log(mapObj);
// console.log(mapObj.has('username'));
// console.log(mapObj.size);

// const getProp = mapObj.get("() => {}");
// console.log(getProp);
