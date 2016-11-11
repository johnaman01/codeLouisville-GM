 "use strict"; 
 angular.module('ranookApp') 
  .service('dataService', function ($http) {
    this.helloConsole = function () {
      console.log("This is the helloConsole service!");  
    };

    this.getEncounters = function (cb) {
      $http.get("/api/encounters")
      .then(cb);
    }
    
    this.deleteEncounter = function (encounter) {
      console.log("The " + encounter.text + "has been deleted!");
    }
    
    this.saveEncounters = function (encounters) {
      console.log(encounters.length + " has been saved!");
    }
  });
