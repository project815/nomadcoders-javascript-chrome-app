const hellos = document.getElementsByClassName("hello");

console.log(hellos);

const tag = document.getElementsByTagName("h1");

console.log(tag);

const css = document.querySelectorAll(".hello h1:first-child");
//Returns the first element that is a descendant of node that matches selectors.

console.log(css);

const ti2 = document.querySelector("#hello");
//querySelector : class, id,를 둘다 가져옴..  // . 과 #으로 구분
const ti1 = document.getElementById("hello");
//getElementById : id로 명시
