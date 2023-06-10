const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = [mon, tue, wed, thu, fri, sat];

console.log(daysOfWeek);

var numbers1 = [10, 30, 50, 70, 90];
var numbers2 = new Array(20, 40, 60, 80, 100);

var mixedArr = ["a", 1, "b", 2, new Date(), "today"];
var objArr = [
  {
    id: 20192010,
    name: "HongGilDong",
    dept: "Software",
  },
  {
    id: 20192011,
    name: "KimSanrang",
    dept: "Business Management",
  },
  {
    id: 20192012,
    name: "KangDongSu",
    dept: "Computer Engineering",
  },
];

console.log(numbers1);
console.log(numbers2);
console.log(mixedArr);
console.log(objArr[2].name, objArr[2].dept);

const colors = ["red", "blue", "green"];
console.log("Original Array: ", colors);

colors.push("yellow");
console.log("push('yellow'):", colors);

colors.pop();
console.log("pop(): ", colors);

colors.reverse();
console.log("reverse(): ", colors);

colors.sort();
console.log("sort(): ", colors);

const splicedcolors = colors.splice(0, 2);
console.log("splice():", splicedcolors);

const newColors = colors.join("-");
console.log("join():", newColors);

const map = new Map();
map.set("2019101", "HongGilDong");
map.set("2019102", "KimSaRang");
map.set("2019103", "KandDongSu");

console.log("### Original data: forEach with Arrow");
map.forEach((value, key) => console.log(key, value));

console.log("### Original data: for-of");
for (let item of map) {
  console.log(item[0], item[1]);
}

console.log("### Original data: for-of with key, map");
for (let [key, value] of map) {
  console.log(key, value);
}

console.log("### Original data: map.keys()");
const keys = map.keys();
for (let key of keys) {
  console.log(map.get(key));
}

console.log("### Map functions");
console.log("get 201901: " + map.get("2019101"));
map.delete("2019103");
console.log("after delete 201903, has : ", map.has("2019103"));
