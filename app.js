const playerName = "nico";
const playerPoints = 121212;
const playerHandsome = true;
const playerFat = "little bit";

console.log();

//player[0] == name
//p;ayer[1] == points
//...
const player = ["nico", 1212, false, "little bit"];

//>> object
const player1 = {
  name: "nico",
  point: 1212,
  handsome: false,
  playerFat: "little bit",
};

console.log(player1);
console.log(player1.name);
console.log(player1["name"]);

player1.name = "song";

console.log(player1.name);

// player1 = "?"; constansts
player1.lastName = "pototo";

console.log(player1);
