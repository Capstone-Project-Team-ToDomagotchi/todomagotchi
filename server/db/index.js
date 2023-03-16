//this is the access point for all things database related!
const db = require("./db");
const User = require("./models/User");
const Pet = require("./models/Pet");
const ToDo = require("./models/ToDo");
//associations could go here!
Pet.belongsTo(User);
Pet.hasMany(ToDo);
User.hasMany(Pet);
User.hasMany(ToDo);
ToDo.belongsTo(Pet);
ToDo.belongsTo(User);
module.exports = {
  db, User, Pet, ToDo
};