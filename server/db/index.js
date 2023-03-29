//this is the access point for all things database related!
const db = require("./db");
const User = require("./models/User");
const Pet = require("./models/Pet");
const Todo = require("./models/Todo");
const SelectPet = require("./models/SelectPet");

// Pet.belongsTo(User);
User.hasMany(Todo);
Todo.belongsTo(User);

SelectPet.belongsTo(Pet);
Pet.hasMany(SelectPet);

User.hasMany(SelectPet);
SelectPet.belongsTo(User);

module.exports = {
  db,
  User,
  Pet,
  Todo,
  SelectPet,
};
