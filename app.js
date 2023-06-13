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
  const clickedCloss = "clicked";
  console.log("click");
  if (h1.className === clickedCloss) {
    h1.className = "";
  } else {
    h1.className = clickedCloss; //상수가 정해짐. - 좋은 방법은 아님. 모든 className를 정리하지 않았으면 좋겠다는 생각을 한다.
  }
}
h1.addEventListener("click", changeColor);
