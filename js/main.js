//js interactivity for Ranook

//changing span via js
var myHeading = document.querySelector('span');
myHeading.textContent = 'Ranook is really Nikki!';

//handler for clicking homeButton 
var homeButton = document.querySelector('#home');
homeButton.onclick = function() {
alert("ouch!");
};

/*roller constructor function
/
function Roller(dice) {
  this.dice = dice;
}

Roller.prototype.randomNumber(dice) {
  
}

Roller.prototype.match() {

}
*
*/

//bind rollButton to randomNumber function
var rollButton = document.querySelector('#rollButton');
rollButton.onclick = function() {
  var sides = 6;  
  var randomNumber = Math.floor(Math.random() * sides) + 1;
alert(randomNumber);
}

/*encounters array meant to hold possible encounter key-value pairs
var encounters = [
  {
    level: 1,
    name: "wolf",
    number: 1,
    surprise: true
  },
  {
    level: 1,
    name: "goblin",
    number: 1,
    surprise: true
  },
  {
    level: 2,
    name: "orc",
    number: 1,
    surprise: true
  },
  {
    level: 2,
    name: "elf",
    number: 1,
    surprise: true
  },
  {
    level: 3,
    name: "dwarf",
    number: 1,
    surprise: true
  },
  {
    level: 3,
    name: "strange animal",
    number: 1,
    surprise: true
  },
];
*/

/*
var goblin = new Object();
goblin.level = 1;
goblin.name = "Goblin";
goblin.number = 3;
goblin.stealth = 12;
goblin["minimum description"] = "You hear a dim-witted chuckle in the trees to your left, and spy three goblins conspiring there.  They don't notice you...";
*/
