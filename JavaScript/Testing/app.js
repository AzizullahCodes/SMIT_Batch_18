// Q1: Find second largest item from the given array.
// const birds = ['cock', 'elephant', 'hen', 'crow', 'hen', 'leo', 'butterfly', 'camel', 'eagle', 'pigeon', 'hen'];
// let longest = '';
// let secondLongest = '';

// for (let i = 0; i < birds.length; i++) {
//     console.log(birds[i]);

//     if (birds[i].length > longest.length) {
//         secondLongest = longest;
//         longest = birds[i];
//     }

//     // else if (birds[i].length > secondLongest.length && birds[i].length < longest.length) {
//     //     secondLongest = birds[i];
//     // }
// };

// console.log('Longest word:', longest);
// console.log('Second longest word:', secondLongest);



// Q2:

// for (let i = 0; i < birds.length; i++) if (birds[i] == 'hen') birds.splice(i, 1);
// console.log(birds);

// Q3
// const birds = ['cock', 'Hen', 'crow', 'hen', 'eagle', 'pigeon', 'Hen'];
// let count = 0;

// for (let item of birds) {
//     if (item == 'Hen') {
//         count++;
//     };
// };

// console.log('Hen count: ', count);




// let str = "*****";

// for (let i = 1; i <= 5; i++) {
//     console.log(str);
//     str = str.slice(0, str.length - 1);
// }


// let str = "*";

// for (let i = 1; i <= 5; i++) {
//     console.log(str);
//     str = str + "*";
// }


// let str = "*****";
// let nestedStr = "*";

// for (let i = 1; i <= 5; i++) {
//     console.log(str);
//     str = str.slice(0, str.length - 1);

//     for (let j = 0; j < 1; j++) {
//         console.log(nestedStr);
//         nestedStr = nestedStr + "*";
//     }
// }

let userName = "muhammadahmed";
let firstNRC;
// console.log(userName.indexOf('u'));
// console.log(userName.lastIndexOf('u'));

for (let i = 0; i < userName.length; i++) {
    // console.log(userName[i]);

    if (userName.indexOf(userName[i]) == userName.lastIndexOf(userName[i])) {
        firstNRC = userName[i];
        break;
    };
};

console.log('First non repeating char: ' , firstNRC);