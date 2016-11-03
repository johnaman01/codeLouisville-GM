"use strict";

angular.module("ranookApp");
.service("dataService", function($http) {
  this.getEncounters = function(cb) {
    $http.get("/api/encounters").then(cb);
  };

  this.deleteEncounters = function(encounter) {
    console.log("I deleted the possibility of" + encounter.name "encounter!");
  };

  this.saveEncounters = function(encounters) {
    console.log("I saved the" + encounter.name "encounter!");
  };

});
