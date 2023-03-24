//this is the access point for all things database related!
const db = require("./db");
const User = require("./models/User");
const Pet = require("./models/Pet");
const Todo = require("./models/Todo");
const SelectPet = require("./models/SelectPet");

// Pet.belongsTo(User);
Pet.hasMany(Todo);

User.hasMany(Todo);
// User.hasMany(Pet);

Todo.belongsTo(Pet);
Todo.belongsTo(User);

SelectPet.belongsTo(Pet);

Pet.hasMany(SelectPet, {
  foreignKey: "petId", // Add a foreign key to link to the todoId column in the SelectPets table
});
SelectPet.belongsTo(Pet);
Pet.hasMany(SelectPet);

User.hasMany(SelectPet, {
  foreignKey: "userId",
});
SelectPet.belongsTo(User);

Todo.hasMany(SelectPet, {
  foreignKey: "todoId", // Add a foreign key to link to the todoId column in the SelectPets table
});
SelectPet.belongsTo(Todo, {
  foreignKey: "todoId", // Add a foreign key to link to the todoId column in the SelectPets table
});

Todo.hasMany(SelectPet);
SelectPet.belongsTo(Todo);

module.exports = {
  db,
  User,
  Pet,
  Todo,
  SelectPet,
};
