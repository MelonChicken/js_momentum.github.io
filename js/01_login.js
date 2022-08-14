const HIDDEN = "hidden";
const USER_NAME = "userName";


const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetings = document.querySelector("#greetings");


function paintGreeting(userName) {
    greetings.innerText = `Welcome! ${userName}!`
    greetings.classList.remove(HIDDEN);
}

function onLoginSubmit(event) {
    event.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem(USER_NAME, userName);
    loginForm.classList.add(HIDDEN);

    const savedUserName = localStorage.getItem(USER_NAME);
    paintGreeting(savedUserName);
}




const savedUserName = localStorage.getItem(USER_NAME);

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savedUserName);
}

