let names = require('./data.js');

console.log('JS loaded');
console.log();
console.log('Yay for node!!');

let age = 33;

if (age > 23) {
  console.log();
  console.log('you are an old man');
}

function birthday() {
  age++;
  return age;
}

console.log();
console.log(`Happy Birthday to you! you are ${birthday()}`);

function getRandomStats(max = 15) {
  return Math.floor(Math.random() * Math.floor(max));
}

function createCharacter(charName, charRace, charClass) {
  const character = {
    name: charName,
    race: charRace,
    class: charClass,
  };

  console.log(`${character.name} created`);
  console.log(`${character.race} ${character.class}`);
}

for (name of names) {
  console.log();
  console.log(name);
}
