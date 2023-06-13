const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

h1.style = "color:red";

const handleTitleClick = () => {
  console.log("helloWorld");
  h1.style = "color:blue";
};

// h1.addEventListener("click", handleTitleClick);
h1.onclick = handleTitleClick;

// h1.addEventListener("mouseenter", () => {
//   h1.innerText = "mouse is here";
//   console.log("mouseEnter");
// });
h1.onmouseenter = () => {
  h1.innerText = "mouse is here";
};

// h1.addEventListener("mouseleave", () => {
//   h1.innerText = "mouse is out of here";
//   console.log("mouseLeave");
// });
h1.onmouseleave = () => {
  h1.innerText = "mouse is out of here";
};

//그치만 addEventListener를 사용하는 것이 더 좋다.
//왜냐하면 removeEventListener를 사용할 수 있기 때문이다.

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
window.addEventListener("resize", handleWindowResize);

window.addEventListener("copy", () => {
  alert("copy");
});

window.addEventListener("offline", () => {
  alert("SOS no Wifi");
});

window.addEventListener("online", () => {
  alert("all good");
});
