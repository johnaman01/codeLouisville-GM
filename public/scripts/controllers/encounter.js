"use strict";

angular.module("ranookApp")
.controller("encounterController", function($scope, dataService) {
  $scope.encounters = [
    {text: "here is one"},
    {text: "number two in static"}
  ];
  
  $scope.learningNgChange = function () {
    console.log("an input changed");
  };

  $scope.addEncounter = function () {
    var encounter = {text: "this is a new encounter"};
    $scope.encounters.unshift(encounter);
  };

  dataService.getEncounters(function(response) {
    var encounters = response.data.encounters;
    $scope.encounters = encounters;
    console.log(response.data); 
  });

  $scope.deleteEncounter = function (encounter, $index) {
   // dataService.deleteEncounter(encounter);
    $scope.encounters.splice($index, 1);
  };

  $scope.saveEncounters = function () {
    var filteredEncounters = $scope.encounters.filter(function(encounter) {
      if(encounter.edited) {
        return encounter;
      };
    });
    dataService.saveEncounters(filteredEncounters);
  };

});



