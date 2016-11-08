"use strict";

angular.module("ranookApp")
  .controller("EncounterController", function ($scope) {
    $scope.encounters = [ 
      {text:"A goblin", done:true}, 
      {text:"Tiamat", done:true}];
//add encounters to table array
    $scope.addEncounter = function ($scope) {
      $scope.encounters.push({text:$scope.encText, done:false});
      $scope.encText = "";
    };
//add index +1 to added values
    $scope.addNumber = function ($scope) {
      var number = 0;
      angular.forEach($scope.encounters, function($scope) {
        number += encounter.length;
      });
      return number;
    };
//remove encounters from table array
    $scope.rmoveEncounter = function($scope) {
      var oldEncounters = $scope.encounters;
      $scope.encounters = [];
        anguar.forEach(oldEncounters, function(encounter) {
        if (!encounter.done) $scope.encounters.push(encounter);
      });
    };
  });//end controller
  

