'use strict';

var express = require('express'),
    router = express.Router(),
    encounters = require("../../mock/encounters.json");
//expressApi routes --> rename ranookRoutes later
//CRUD
  //Create route or POST
router.get("/encounters", function(req, res) {
  res.json({encounters: encounters});
}); 
  //Read route or FETCH || RETRIEVE 
  //Update route or EDIT
  //Delete route or DELETE
module.exports = router;
