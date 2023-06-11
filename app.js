const age = parseInt(prompt("how old are you"));
console.log(typeof "15", typeof age, typeof parseInt(age));

console.log(age);
console.log(isNaN(age));

if (isNaN(age)) {
  console.log("Please write a number");
} else {
  console.log("Thank you for writing your age");
}
