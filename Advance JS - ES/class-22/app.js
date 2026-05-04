const ul = document.getElementById("container");

const arr = [
  {
    id: 1,
    foodName: "Anda Paratha",
    type: "Break fast",
  },

  {
    id: 2,
    foodName: "Bread & Eggs",
    type: "Break fast",
  },

  {
    id: 3,
    foodName: "Daal Roti",
    type: "Lunch",
  },

  {
    id: 4,
    foodName: "Daal Chawal",
    type: "Lunch",
  },

  {
    id: 5,
    foodName: "Biryani",
    type: "Dinner",
  },

  {
    id: 6,
    foodName: "Qeema Roti",
    type: "Dinner",
  },

  {
    id: 7,
    foodName: "Pulao",
    type: "Lunch",
  },

  {
    id: 8,
    foodName: "Papay",
    type: "Break fast",
  },
];

console.log(arr);

const renderData = (foodType) => {
  console.log("Food type: ", foodType);

  if (foodType == "all") {
    ul.innerHTML = arr
      .map((item) => {
        return `<li> ${item.foodName} </li>`;
      })
      .join("");
  }
  
  else {
    ul.innerHTML = arr
      .filter((item) => {
        return item.type == foodType;
      })
      .map((item) => {
        return `<li> ${item.foodName} </li>`;
      })
      .join("");
  }
};
