//called ranookApp; below is first controller=table;
var ranookApp = angular.module("ranookApp", []);

ranookApp.controller("TableController", function 
TableController($scope) {
  $scope.encounters = [ 
    {text:"A goblin", done:true}, 
    {text:"Tiamat", done:true}];
//add encounters to table array
  $scope.addEncounter = function () {
    $scope.encounters.push({text:$scope.encText, done:false});
    $scope.encText = "";
  };
//add index +1 to added values
  $scope.addNumber = function () {
    var number = 0;
    angular.forEach($scope.encounters, function() {
      number += encounter.length;
    });
    return number;
  };
//remove encounters from table array
  $scope.removeEncounter = function() {
    var oldEncounters = $scope.encounters;
    $scope.encounters = [];
      angular.forEach(oldEncounters, function(encounter) {
      if (!encounter.done) encTable.encounters.push(encounter);
    });
  };
});//end controller
  

