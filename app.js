const loginForm = document.querySelector("#login-form");
// == const loginForm = document.getElementById("loginForm");

const loginInput = loginForm.querySelector("input");
// == const InputInput = document.querySelector("#loginForm input");
const loginButton = loginForm.querySelector("button");
// == const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  console.dir(loginInput);
  console.log("Clcik");
  console.log("clcike : ", loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);
