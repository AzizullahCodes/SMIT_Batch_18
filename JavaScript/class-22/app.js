var ul = document.getElementById("ul");
var todoInput = document.getElementById("todo-input");
var addItemBtnEl = document.getElementById("add-item-btn");
var elementToUpdate = null;

// Function to delete an item...!
function deleteItem(liId) {
  // console.log("List item id: ", liId);
  var targetLi = String(liId);
  var liToDelete = document.getElementById(targetLi);
  ul.removeChild(liToDelete);
}

// Function to update an item...!
function updateItem() {
  var li = document.getElementById(elementToUpdate);
  li.firstChild.nodeValue = todoInput.value;
  addItemBtnEl.innerHTML = 'Add Item';
  addItemBtnEl.removeAttribute("onclick");
  addItemBtnEl.setAttribute("onclick", "addItem()");
  elementToUpdate = null;
  todoInput.value = "";
}

// Function to edit an item...!
function editItem(liId) {
  var targetLi = String(liId);
  var li = document.getElementById(targetLi);
  var liText = li.firstChild.nodeValue;
  todoInput.value = liText;
  addItemBtnEl.innerHTML = "Update Item";
  addItemBtnEl.removeAttribute("onclick");
  addItemBtnEl.setAttribute("onclick", "updateItem()");
  elementToUpdate = liId;
}

// Function to add an item...!
function addItem() {
  var li = document.createElement("li");
  var delBtnEl = document.createElement("button");
  var editBtnEl = document.createElement("button");

  var liText = document.createTextNode(todoInput.value);
  var delBtnText = document.createTextNode("Delete Item");
  var editBtnText = document.createTextNode("Edit Item");

  var randomId = new Date().getTime();
  // console.log('random id: ' , randomId);

  li.setAttribute("id", randomId);
  delBtnEl.setAttribute("onclick", "deleteItem(" + randomId + ")");
  editBtnEl.setAttribute("onclick", "editItem(" + randomId + ")");

  delBtnEl.appendChild(delBtnText);
  editBtnEl.appendChild(editBtnText);

  li.appendChild(liText);
  li.appendChild(delBtnEl);
  li.appendChild(editBtnEl);
  ul.appendChild(li);
  todoInput.value = "";
}

function abc(num) {}

abc("1");
abc(2);
abc;
