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

//A for loop that creates an array
for (i = 0; i < 6; i++) {
  var indice = i + 1;
  var newIndice = indice + ',';
  var array = [indice];
}

//A for loop to create elements
for (i = 0; i < 6; i++) {
  var newListItem = document.createElement("li");
  newListItem.textContent = i + 1;
  var numColumn = document.getElementById("number");
  var tableHead = numColumn.parentNode;
  numColumn.appendChild(newListItem);
}

//bind randomNumber to appropriate newListItem
if (parseInt(newListItem.textContent, 10) === randomNumber) {
  newListItem.textContent = "picked " + newListItem.textContent;
  } else {
      newListItem.textContent = i;
    }
  //Problem:  "picked" is always amended to 6 because that is the last value given the property
  //Solution: create an array during the for loop, where the index is stored 


