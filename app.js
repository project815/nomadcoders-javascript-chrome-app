const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

// const handleTitleClick = () => {
//   const currentColor = h1.style.color;
//   let newColor;
//   if (currentColor === "blue") {
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   h1.style.color = newColor;

//   h1.style.color = h1.style.color === "blue" ? "tomato" : "blue";
// };

function changeColor() {
  const clickedClass = "clicked";
  console.log("click");
  // if (h1.classList.contains(clickedClass)) {
  //   h1.classList.remove(clickedClass);
  // } else {
  //   h1.classList.add(clickedClass);
  // }

  //toggle을 사용하면 위에 다섯 줄 해결 가능
  h1.classList.toggle("clicked");
}
h1.addEventListener("click", changeColor);
