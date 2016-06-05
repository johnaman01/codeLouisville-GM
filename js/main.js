//js interactivity for Ranook

//changing span via js
var myHeading = document.querySelector('span');
myHeading.textContent = 'Ranook is really Nikki!';

//handler for clicking homeButton 
var homeButton = document.querySelector('#home');
homeButton.onclick = function() {
alert("ouch!");
};

//hide ul #dice


/*adding custom greeting for user

var userButton = document.querySelector('button');
var myHeading = document.querySelector('h2');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Create your random encounter with Ranook, ' + myName + '!';
} 
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Create your random encounter with Ranook, ' + storedName + '!';
}
userButton.onclick = function() {
  setUserName();
}

*/

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

var goblin = new Object();
goblin.level = 1;
goblin.name = "Goblin";
goblin.number = 3;
goblin.stealth = 12;
goblin["minimum description"] = "You hear a dim-witted chuckle in the trees to your left, and spy three goblins conspiring there.  They don't notice you...";

