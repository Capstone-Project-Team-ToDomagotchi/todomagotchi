//this is the access point for all things database related!
const db = require("./db");
const User = require("./models/User");
const Pet = require("./models/Pet");
const ToDo = require("./models/ToDo");
const SelectPet = require('./models/SelectPet')

Pet.belongsTo(User);
Pet.hasMany(ToDo);

User.hasMany(ToDo);
User.hasMany(Pet);

ToDo.belongsTo(Pet);
ToDo.belongsTo(User)

SelectPet.belongsTo(Pet, {
  foreignKey: 'petId'  // Add a foreign key to link to the todoId column in the SelectPets table
});
Pet.hasMany(SelectPet, {
  foreignKey: 'petId'  // Add a foreign key to link to the todoId column in the SelectPets table
});

User.hasMany(SelectPet, {
  foreignKey: 'userId'
})

ToDo.hasMany(SelectPet, {
  foreignKey: 'todoId'  // Add a foreign key to link to the todoId column in the SelectPets table
});
SelectPet.belongsTo(ToDo, {
  foreignKey: 'todoId'  // Add a foreign key to link to the todoId column in the SelectPets table
})

ToDo.hasMany(SelectPet);
SelectPet.belongsTo(ToDo)

 
module.exports = {
  db,
  User,
  Pet,
  ToDo,
  SelectPet,
};
