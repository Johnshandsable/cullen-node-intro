// load data.js file
let names = require('./data');

// grab myFavoriteNumber from the myFavoriteNumber.js file
let myFavoriteNumber = require('./myFavoriteNumber');

// grab count
const counter = require('./counter');
console.log(counter());

// create an array of characters
let characters = [];

function getRandomStats(max = 15) {
  return Math.floor(Math.random() * Math.floor(max));
}

function createCharacter(charName, charRace, charClass) {
  const character = {
    name: charName,
    race: charRace,
    class: charClass,
    constitution: getRandomStats(),
    dexterity: getRandomStats(),
    strength: getRandomStats(),
    mind: getRandomStats(),
    intelligence: getRandomStats(),
  };
  return character;
}

for (cullenName of names.students) {
  console.log();
  console.log(cullenName);
}

console.log();
console.log(myFavoriteNumber);

console.log();
console.table(names.students);

// name, race, class
let newChar = createCharacter('butts', 'halfling', 'rogue');

console.table(newChar);

names.addToStudents('John');

console.log(names);
