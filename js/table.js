//encounter table constructor function
function Table(row, creature, description, level) {
  this.row = row;
  this.creatures = creature;
  this.description = description;
  this.level = level
}



Table.prototype.list = function() {
  var encounters = "#" + this.row + ". " + this.creature + " " + this.description + " " + this.level;
}

var goblin = new Table(1, goblin, "green and ugly", 1);

var dog = "bark!";
var listItem = document.getElementById("item1");
listItem.textContent = goblin.description;

//creature constructor function

