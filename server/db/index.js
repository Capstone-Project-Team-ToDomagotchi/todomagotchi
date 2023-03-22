//this is the access point for all things database related!
const db = require("./db");
const User = require("./models/User");
const Pet = require("./models/Pet");
const ToDo = require("./models/ToDo");
const SelectPet = require('./models/SelectPet')
//associations could go here!



User.hasMany(ToDo);
ToDo.belongsTo(User);

User.hasMany(SelectPet);
SelectPet.belongsTo(User);

SelectPet.belongsTo(Pet, {
  foreignKey: 'petId'  // Add a foreign key to link to the todoId column in the SelectPets table
});
Pet.hasMany(SelectPet, {
  foreignKey: 'petId'  // Add a foreign key to link to the todoId column in the SelectPets table
});

ToDo.hasMany(SelectPet, {
  foreignKey: 'todoId'  // Add a foreign key to link to the todoId column in the SelectPets table
});
SelectPet.belongsTo(ToDo, {
  foreignKey: 'todoId'  // Add a foreign key to link to the todoId column in the SelectPets table
})



module.exports = {
  db,
  User,
  Pet,
  ToDo,
  SelectPet,
};
