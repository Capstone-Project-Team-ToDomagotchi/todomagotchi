const { faker } = require("@faker-js/faker");
const { SelectPet } = require("../server/db");

function createSelectPetArray() {
  let selectPetArray = [];
  for (let i = 1; i < 10; i++) {
    selectPetArray.push(createSelectPet());
  }
  return selectPetArray;
}

function createSelectPet() {
  const qty = faker.datatype.number({ min: 1, max: 1 });
  const userId = faker.datatype.number({ min: 1, max: 10 });
  const todoId = faker.datatype.number({ min: 1, max: 10 });
  const petId = faker.datatype.number({ min: 1, max: 9 });

  return {
    qty,
    userId,
    todoId,
    petId,
  };
}

async function selectPetSeed() {
  const selectPetArray = createSelectPetArray();
  const selectPet = await SelectPet.bulkCreate(selectPetArray);

  return { selectPet };
}

module.exports = selectPetSeed;