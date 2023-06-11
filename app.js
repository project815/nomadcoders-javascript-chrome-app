const hellos = document.getElementsByClassName("hello");

console.log(hellos);

const tag = document.getElementsByTagName("h1");

console.log(tag);

const title = document.querySelector(".hello h1");
//Returns the first element that is a descendant of node that matches selectors.

const test = document.querySelectorAll(".hello h1:first-child");
//Returns all element descendants of node that match selectors.
title.innerText = "hello";
console.log(title);

//change test.innerText to "hello" All
test.innerText = "hello";
console.log("test:", test);
const ti2 = document.querySelector("#hello");
//querySelector : class, id,를 둘다 가져옴..  // . 과 #으로 구분
const ti1 = document.getElementById("hello");
//getElementById : id로 명시
