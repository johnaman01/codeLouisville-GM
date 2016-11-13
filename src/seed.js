"use strict";

var Encounter = require("./models/encounter.js");

var encounters = [
  "goblin",
  "owlbears",
  "hydra",
  "drow on spiders",
  "lich on a midnight stroll",
  "treasure"

];

encounters.forEach(function(encounter, index) {
  Encounter.find({'text': encounter}, function(err, encounters) {
    if(!err && !encounters.length) {
      Encounter.create({selected: false, text: encounter});
    };
  });
});
