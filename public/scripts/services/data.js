 "use strict"; 
 angular.module('ranookApp') 
  .service('dataService', function ($http, $q) {
    this.helloConsole = function () {
      console.log("This is the helloConsole service!");  
    };

    this.getEncounters = function (cb) {
      $http.get("/api/encounters")
      .then(cb);
    }
    
    this.deleteEncounter = function (encounter) {
      console.log("The " + encounter.text + " encounter has been deleted!");
    }
    
    this.saveEncounters = function (encounters) {
      var queue = [];
      encounters.forEach(function(encounter) {
        var request;
        if(!encounter._id) {
          request = $http.post("/api/encounters", encounter)
        } else {
          request = $http.put("/api/encounters/" + encounter._id, encounter).then(function(result) {
            encounter = result.data.encounter;
            return encounter;
          });
        };
        queue.push(request);
      }); 
      return $q.all(queue).then(function(results) {
        console.log(encounters.length + " encounter(s) saved!");
      });
    };

  });
