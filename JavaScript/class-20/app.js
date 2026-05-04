var showCoins = document.getElementById("coins");
var showUserBid = document.getElementById("show-user-bid");
var showPcBid = document.getElementById("show-computer-bid");
var userBid = document.getElementById("bid-field");
var userAmount = document.getElementById("amount");
var showUserAmount = document.getElementById("user-bid-amount");

var coins = 1000;

showCoins.innerHTML = coins;

// Clear form handler...!
function clearForm() {
  userBid.value = "";
  userAmount.value = "";
}

// Generate computer bid from 1 to 3
function generatePcBid() {
  var pcBid = Math.ceil(Math.random() * 3);
  return pcBid;
}

// Function to compare values and finish game...!
function compareValues(uBid, pcBid, userAm) {
  console.log("User Bid: ", uBid);
  console.log("PC Bid: ", pcBid);
  console.log("User amount: ", userAm);

  if (uBid == pcBid) {
    coins = coins + Number(userAm);
  } else {
    coins = coins - Number(userAm);
  }

  console.log("Final coins: ", coins);
  showCoins.innerHTML = coins;
}

// Function to play game...!
function playGame() {
  if (userBid.value <= 1 || userBid.value > 3) {
    alert("Bid value is only allow between 1 to 3");
    return;
  }

  if (userAmount.value <= 1 || userAmount.value > 100) {
    alert("Amount is only allow between 1 to 100");
    return;
  }

  if (userAmount.value > coins) {
    alert("Insufficent balance!");
    return;
  }

  var fetchPcBidValue = generatePcBid();
  showUserBid.innerHTML = userBid.value;
  showUserAmount.innerHTML = userAmount.value;
  showPcBid.innerHTML = fetchPcBidValue;
  compareValues(userBid.value, fetchPcBidValue, userAmount.value);
  clearForm();
};