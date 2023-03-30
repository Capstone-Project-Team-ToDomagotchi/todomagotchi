const { SelectPet } = require("../server/db");

async function selectPetSeed() {
  const selectPets = await Promise.all([
    SelectPet.create({
      exp: 69,
      userId: 1,
      petId: 2,
      name: "Meow Meow",
      age: 3,
      selectImg: 1,
    }),
    SelectPet.create({
      exp: 30,
      userId: 2,
      petId: 5,
      name: "Planty",
      age: 1,
      selectImg: 0,
    }),
    SelectPet.create({
      exp: 96,
      userId: 3,
      petId: 1,
      name: "Little Foot",
      age: 2,
      selectImg: 2,
    }),
    SelectPet.create({
      exp: 92,
      userId: 4,
      petId: 4,
      name: "Clover",
      age: 4,
      selectImg: 2,
    }),
    SelectPet.create({
      exp: 0,
      userId: 5,
      petId: 3,
      name: "The Legs",
      age: 10,
      selectImg: 0,
    }),
  ]);
  return {
    selectPets,
  };
}

module.exports = selectPetSeed;
