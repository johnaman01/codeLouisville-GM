'use strict';

var express = require('express');
var Encounter = require("../models/encounter");
var router = express.Router();
//var encounters = require("../../mock/encounters.json");

//expressApi routes --> rename ranookRoutes later

//CRUD
  //Read route or FETCH || RETRIEVE 
router.get("/encounters", function(req, res) {
  Encounter.find( {}, function (err, encounters) {
    if (err) {
      res.status(500).json({message: err.message});
    }
  res.json({encounters: encounters});
  });
}); 
  //Create route or POST
router.post("/encounters", function(req, res) {
  var encounter = req.body;
  Encounter.create(encounter, function(err, encounter) {
    if (err) {
      return res.status(500).json({err: err.message}); 
    }
  res.json({"encounter": encounter, message: "Encounter created."});
  });
});

  //Update route or EDIT or PUT???
router.put("/encounters/:id", function(req, res) {
  var id = req.params.id;
  var encounter = req.body;
  if(encounter && encounter._id !==id) {
    return res.status(500).json({err: "Ids don't match."});
  }   
  Encounter.findByIdAndUpdate(id, encounter, {new: true}, function(err, encounter) {
    if (err) {
      return res.status(500).json({err: err.message}); 
    }
  res.json({"encounter": encounter, message: "Encounter updated."});
  });
});

  //Delete route or DELETE
module.exports = router;
