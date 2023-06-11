const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

title.style = "color:red";

const handleTitleClick = () => {
  console.log("helloWorld");
  title.style = "color:blue";
};

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", () => {
  title.innerText = "mouse is here";
  console.log("mouseEnter");
});
title.addEventListener("mouseleave", () => {
  title.innerText = "mouse is out of here";
  console.log("mouseLeave");
});
