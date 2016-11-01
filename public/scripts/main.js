//js interactivity for Ranook

//changing span via js
var myHeading = document.querySelector('span');
myHeading.textContent = 'Ranook is really Nikki!';

//handler for clicking homeButton 
//var homeButton = document.querySelector('#home');
//homeButton.onclick = function() {
//alert("ouch!");
//};

//bind rollButton to randomNumber function
var rollButton = document.querySelector('#rollButton');
rollButton.onclick = function() {
  var sides = 6;  
  var randomNumber = Math.ceil(Math.random() * sides);
alert(randomNumber);
}

//bind randomNumber to appropriate newListItem

