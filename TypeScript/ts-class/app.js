"use strict";
// console.log("Welcome to TypeScript");
// const str: string = 'Hello TS';
// console.log(str);
// let userName: string = 'Ahmed';
// userName = "Muhammad Ahmed";
// console.log(userName);
// let n: number = 10;
// console.log(n);
// let isEdit : boolean = false;
// console.log(isEdit);
// const names: string[] = ['ahmed', 'haseeb', 'aziz'];
// console.log(names);
// const numbers: number[] = [1, 4, 6, 7, 9]
// console.log(numbers);
// for (let i: number = 0; i < 5; i++) {
//     console.log(i);
// };
// const myFunction = (): void => {
//     // console.log('Hello to TS!');
// };
// myFunction();
// const myFunction = (userName: string, amount: number): void => {
//     console.log(userName, amount);
// };
// myFunction('ahmed', 100);
// const myFunction = (firstName: string, lastName: string): string => {
//     const fullName: string = `${firstName} ${lastName}`;
//     return fullName;
// };
// const res: string = myFunction('Muhammad', 'Ahmed');
// console.log(res);
// interface User {
//     userName: string,
//     title: string
// };
// const obj: User = {
//     userName: 'Ahmed',
//     title: "Senior Dev"
// };
// console.log(obj);
// interface AnimalInfo {
//     animalName: string,
//     color: string,
//     isHalal?: boolean
// };
// const animalObj: AnimalInfo = {
//     animalName: "Cow",
//     color: "Black",
//     isHalal: true
// };
// const animalObj2: AnimalInfo = {
//     animalName: 'Horse',
//     color: "White"
// }
// console.log(animalObj);
// console.log(animalObj2);
// interface User<type> {
//     userName: string;
//     title: string;
//     skills: type
// }
// const user1: User<string> = {
//     userName: "Kashan",
//     title: "Accountant",
//     skills: "MS Excel"
// };
// // console.log(user1);
// const user2: User<string[]> = {
//     userName: "Ahmed",
//     title: "Dev",
//     skills: ['html', 'css']
// };
// console.log(user2);
// interface User<type extends object> {
//     userName: string;
//     age: string;
//     personelInfo: type
// };
// const user1: User<{ grandFName: string, personalHouse: boolean }> = {
//     userName: 'Ahmed',
//     age: "29",
//     personelInfo: {
//         grandFName: "Abc User",
//         personalHouse: false
//     }
// }
// // console.log(user1);
// const user2: User<{ grandFName: string, personalHouse: boolean, isGrandParentAlive?: boolean }> = {
//     userName: 'Ahmed',
//     age: "29",
//     personelInfo: {
//         grandFName: "Abc User",
//         personalHouse: false,
//         isGrandParentAlive : false
//     }
// }
// console.log(user2);
// interface User<type extends { personalHouse: boolean }> {
//     userName: string;
//     age: string;
//     personelInfo: type
// };
// const user1: User<{ personalHouse: boolean, grandFName: string }> = {
//     userName: "AHmed",
//     age: "29",
//     personelInfo: {
//         personalHouse: false,
//         grandFName: "Abc User"
//     }
// };
// const user2: User<{ personalHouse: boolean, grandFName: string, haveCar?: boolean }> = {
//     userName: "AHmed",
//     age: "29",
//     personelInfo: {
//         personalHouse: false,
//         grandFName: "Abc User",
//         haveCar: false
//     }
// };
// console.log(user1);
// console.log(user2);
// interface User {
//     userName: string
// }
// interface User {
//     age: string
// }
// const obj: User = {
//     userName: "Ahmed",
//     age: "29"
// };
// console.log(obj);
// type User = {
//     userName: string,
//     title: string
// };
// type User = {
//     age : string
// };
// const obj: User = {
//     userName: "Ahmed",
//     title: "Senior Dev"
// };
// console.log(obj);
// type ID = string | number;
// const id: ID = 13579
// console.log(id);
/*
TypeScript Data Types:
1: String
2: Number
3: Boolean
4: Generic types
5: Union
6: Literal
7: Tuple
*/
// type ApiStatus = 'success' | 'error';
// const result : ApiStatus = 'success';
// console.log(result);
// type ArrType = [string, number];
// const person: ArrType = ['ahmed', 8];
// console.log(person);
// type ArrType = [string, number, boolean, string[]?];
// const person: ArrType = ['ahmed', 8, true];
// console.log(person);
// interface UserType {
//     id: number,
//     name: string,
//     username: string,
//     email: string,
//     address: {
//         street: string,
//         suite: string,
//         city: string,
//         zipcode: string,
//         geo: {
//             lat: string,
//             lng: string
//         }
//     },
//     phone: string,
//     website: string,
//     company: {
//         name: string,
//         catchPhrase: string,
//         bs: string
//     }
// };
// let usersData: UserType[] = [];
// const handleApiCall = async () : Promise<void> => {
//     const apiUrl: string = "https://jsonplaceholder.typicode.com/users";
//     const res: any = await fetch(apiUrl);
//     console.log(res);
//     const actualData: UserType[] = await res.json();
//     console.log(actualData);
//     if (actualData.length > 0) {
//         usersData = actualData;
//     }
// };
// handleApiCall();
// const handleValidation = (): void => {
//     if (userName == "") {
//         console.log('Username is required');
//     }
//     else if (title == "") {
//         console.log('Title is required');
//     }
//     else if (userLocation == "") {
//         console.log('Location is required');
//     }
//     else if (shift == "") {
//         console.log('Shift is required');
//     }
//     else {
//         const obj = { userName, title, userLocation, shift };
//         console.log(obj);
//     }
// }
// handleValidation();
// const handleValidation = (): void => {
//     try {
//         const obj = { userName, title, userLocation, shift };
//         if (userName == "") throw "Username is required";
//         else if (title == "") throw "Title is required";
//         else if (userLocation == "") throw "Location is required"
//         else if (shift == "") throw "Shift is required";
//         else {
//             console.log(obj);
//         }
//     }
//     catch (error: any) {
//         if (error) {
//             console.log('Validation Err: ', error);
//         }
//     }
// }
// handleValidation();
let userName = "Ahmed";
let title = "";
let userLocation = "DHA";
let shift = "Morning";
const handleValidation = () => {
    try {
        const obj = { userName, title, userLocation, shift };
        const validator = Object.values(obj);
        const checkValues = validator.some((item) => {
            return item == "";
        });
        console.log(checkValues);
        if (checkValues == true)
            throw "Input field is required";
        else
            console.log(obj);
    }
    catch (error) {
        if (error) {
            console.log('Validation Err: ', error);
        }
    }
};
handleValidation();
