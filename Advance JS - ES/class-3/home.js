const h2El = document.getElementById("h2");

// Get data from DB...!
function getData() {
    const fetchUser = localStorage.getItem('User');
    const user = JSON.parse(fetchUser);
    console.log('User: ' , user);

    if (user) {
        h2El.innerHTML = `Hello ${user.name}!`;
    }

    else {
        window.location.href = "./index.html";
    }
};

function logOut() {
    localStorage.removeItem('User');
    window.location.href = "./index.html";
};