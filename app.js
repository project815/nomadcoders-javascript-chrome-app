const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log(username);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerHTML = `hello ${username}`;
}

function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
  alert("Clicked");
}
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

// handleLinkClick({information about the event that just happened})
localStorage.getItem("username");

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerHTML = `hello ${savedUsername}`;
}
