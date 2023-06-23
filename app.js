const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  console.log(username);
}

function handleLinkClick() {
  alert("Clicked");
}
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

// handleLinkClick({information about the event that just happened})
