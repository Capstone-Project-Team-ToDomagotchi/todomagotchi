const { faker } = require('@faker-js/faker');
const { Pet } = require('../server/db');

function createPetArray() {
    let petArray = [];
    for (let i = 1; i < 10; i++) {
        petArray.push(createPet())
    }
    return petArray;
}

function createPet() {
    const name = faker.lorem.word({length: {min:1, max: 3}});
    const age = faker.datatype.number({min:1, max:5});
    const type = faker.helpers.arrayElement(['plant','monster'], 1);
    const species = faker.lorem.word(1);
    const lifePoints = faker.datatype.number({min:0, max:50});
    const image = faker.image.imageUrl(true);

    return {
        name, age, type, species, lifePoints, image
    };
}

async function petSeed() {
    const petArray = createPetArray();
    const pets = await Pet.bulkCreate(petArray);

    return {
        pets
    };
}

module.exports = petSeed;