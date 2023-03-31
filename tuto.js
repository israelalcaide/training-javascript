let avengers = [
  "Iron Man",
  "Captain America",
  "Thor",
  "Hulk",
  "Black Widow",
  "Hawkeye",
  "Spider-Man",
  "Wolverine",
  "Deadpool",
  "Doctor Strange",
  "Black Panther",
  "Ant-Man",
  "Wasp",
  "Vision",
  "Scarlet Witch",
  "Falcon",
  "Winter Soldier",
  "Groot",
  "Rocket Raccoon",
  "Gamora",
  "Drax the Destroyer",
  "Star-Lord",
  "Loki",
  "Nick Fury",
  "Agent Coulson",
  "War Machine",
  "Captain Marvel",
  "Shang-Chi",
  "Thanos",
];

let fillingChar = `*`
let max = avengers.length - 1;
let min = 0;
let intentos = 1;
let respuesta;
let random = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(avengers [random]);
let hero = avengers[random]
let character = []
for (let start = 0; start < hero.length; start++) {
    character[start] = fillingChar;
}
console.log(character);