//here is encounters, where the user adds or deletes encounters from the table

angular.module("ranookApp", []);
  .controller("tableController", function () {
    var table = this;
    table.encounters = [ 
      {text:"goblin", done:true}, 
      {text:"Totaparwipe the Red", done:true}];

    table.addEncounter = function () {
      table.encounters.push({text:table.encounterText, done:false});
      table.encounterText = "";
    };

    table.remaining = function () {
      var count = 0;
    }
  });
  return count;
  

