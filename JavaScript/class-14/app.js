// var n = 10;
// n = n.toString();
// n = String(n);
// console.log(n, typeof n);

// var n1 = "20.123";
// n1 = Number(n1);
// console.log(n1, typeof n1);

// var test = 1 + "a";
// console.log(test, typeof test);

// var n = '25.923';
// n = parseInt(n);
// console.log(n , typeof n);

// var n = "100.10rs";
// var test = parseFloat(n);
// console.log(test, typeof test);



// var currentDate = new Date();
// console.log(currentDate , typeof currentDate);

// var currentY = new Date().getFullYear();
// console.log(currentY);

// var currentY = currentDate.getFullYear();
// console.log(currentY);

// var currentM = currentDate.getMonth();
// console.log(currentM);

// var currentD = currentDate.getDay();
// console.log(currentD);

// var currentH = currentDate.getHours();
// console.log(currentH);

// var currentM = currentDate.getMinutes();
// console.log(currentM);

// var currentS = currentDate.getSeconds();
// console.log(currentS);


// var currentY = new Date().getFullYear();
// var birthY = 1980;
// var calculateY = currentY - birthY;
// console.log(calculateY);


// var currentM = new Date().getMonth();
// console.log(currentM);


var currentDate = new Date();

// var currentMS = currentDate.getMilliseconds();
// console.log(currentMS);

// var currentD = currentDate.getDate();
// console.log(currentDate);

// var fullDate = currentDate.toDateString();
// console.log(fullDate);

// var onlyDate = currentDate.toLocaleDateString();
// console.log(onlyDate);

var fullTime = currentDate.toTimeString();
console.log(fullTime);

var onlyTime = currentDate.toLocaleTimeString();
console.log(onlyTime);