"use strict";

angular.module("ranookApp")
.controller("mainController", function($scope, dataService) {
  
  dataService.getEncounters(function(response) {
    var encounters = response.data.encounters;
    $scope.encounters = encounters;
  });
});
