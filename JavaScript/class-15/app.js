// var currentDate = new Date();
// console.log(currentDate);

// var currentY = currentDate.getFullYear();
// console.log(currentY);

// var currentM = currentDate.getMonth();
// console.log(currentM);

// var currentD = currentDate.getDay();
// console.log(currentD);

// var currentH = currentDate.getHours();
// console.log(currentH);

// var currentMi = currentDate.getMinutes();
// console.log(currentMi);

// var currentS = currentDate.getSeconds();
// console.log(currentS);

// var showTime = currentDate.toTimeString();
// console.log(showTime);

// var showTime = currentDate.toLocaleTimeString();
// console.log(showTime);

// var showDate = currentDate.toDateString();
// console.log(showDate);

// var showDate = currentDate.toLocaleDateString();
// console.log(showDate);

// var bday = new Date('08 July 1997');
// console.log(bday);

// var currentY = new Date().getFullYear();
// var birthY = 1997;
// console.log(currentY - birthY);

// var rightNow = new Date();
// console.log(rightNow.getMilliseconds());

// console.log(rightNow.getTime());


var rightNow = new Date();
var bDay = new Date('12 December 2025 09:00:00');

var rightNowInMS = rightNow.getTime();
var bDayInMS = bDay.getTime();
var calculateMS = rightNowInMS - bDayInMS;
var daysFormula = calculateMS / (1000 * 60 * 60 * 24);
daysFormula = Math.floor(daysFormula);
console.log(daysFormula);