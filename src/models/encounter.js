"use strict";

var mongoose = require("mongoose");

//encounter.text

//encounter.selected

var encounterSchema = new mongoose.Schema({
  text: String,
  selected: Boolean
});

var model = mongoose.model("Encounter", encounterSchema);

module.exports = model;
