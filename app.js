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

  // check user  >> css requried maxlength
  // const username = loginInput.value;
  // if (username === "") {
  //   alert("Please write your name");
  // } else if (username.length > 15) alert("You name is too long");
}

loginButton.addEventListener("click", onLoginBtnClick);
