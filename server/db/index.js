//this is the access point for all things database related!
const db = require("./db");
const User = require("./models/User");
const Pet = require("./models/Pet");
const ToDo = require("./models/ToDo");
const SelectPet = require('./models/SelectPet')

//Associations
User.hasMany(ToDo);
ToDo.belongsTo(User);

User.hasMany(SelectPet);
SelectPet.belongsTo(User);

SelectPet.belongsTo(Pet);
Pet.hasMany(SelectPet);

ToDo.hasMany(SelectPet);
SelectPet.belongsTo(ToDo)


module.exports = {
  db,
  User,
  Pet,
  ToDo,
  SelectPet,
};
