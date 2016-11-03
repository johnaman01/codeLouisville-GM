"use strict";

angular.module("ranookApp")
  .controller("EncounterController", function () {
    var encTable = this;
    encTable.encounters = [ 
      {text:"A goblin", done:true}, 
      {text:"Tiamat", done:true}];
//add encounters to table array
    encTable.addEncounter = function () {
      encTable.encounters.push({text:encTable.encText, done:false});
      encTable.encText = "";
    };
//add index +1 to added values
    encTable.addNumber = function () {
      var number = 0;
      angular.forEach(encTable.encounters, function() {
        number += encounter.length;
      });
      return number;
    };
//remove encounters from table array
    encTable.removeEncounter = function() {
      var oldEncounters = encTable.encounters;
      encTable.encounters = [];
        angular.forEach(oldEncounters, function(encounter) {
        if (!encounter.done) encTable.encounters.push(encounter);
      });
    };
  });//end controller
  

