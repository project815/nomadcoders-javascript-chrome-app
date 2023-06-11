const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

title.style = "color:red";

const handleTitleClick = () => {
  console.log("helloWorld");
};

title.addEventListener("click", handleTitleClick);
