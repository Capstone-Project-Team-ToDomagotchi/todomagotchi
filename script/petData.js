const { faker } = require('@faker-js/faker');
const { Pet } = require('../server/db');

// function createPetArray() {
//     let petArray = [];
//     for (let i = 1; i < 10; i++) {
//         petArray.push(createPet())
//     }
//     return petArray;
// }

// function createPet() {
//     // const name = faker.lorem.word({length: {min:1, max: 3}});
//     // const age = faker.datatype.number({min:1, max:5});
//     const type = faker.helpers.arrayElement(['plant','monster'], 1);
//     const species = faker.lorem.word(1);
//     const images = faker.image.imageUrl(true);
    
//     return {
//         // name, age, 
//         type, species, images, 
//     };
// }
async function petSeed() {
const pets = await Promise.all([
    Pet.create({
        image: ["https://i.imgur.com/gyP0Sfn.png", "https://i.imgur.com/pcKC4db.png", "https://i.imgur.com/z4NoDLw.png"],
        type: "monster",
        species: "Brontosaurus",
    }),
    Pet.create({
        image: ["https://i.imgur.com/gyP0Sfn.png", "https://i.imgur.com/Fz0M2Fk.png", "https://i.imgur.com/sDnyy2m.png"],
        type: "monster",
        species: "Tiphinx",
    }),
    Pet.create({
        image: ["https://i.imgur.com/gyP0Sfn.png", "https://i.imgur.com/Eg1SLCt.png", "https://i.imgur.com/f2aFPJa.png"],
        type: "monster",
        species: "Koi",
    }),
    Pet.create({
        image: ["https://i.imgur.com/dsKrt9r.png", "https://i.imgur.com/L2EX2bF.png", "https://i.imgur.com/i0kTQ9f.png"],
        type: "plant",
        species: "Monstera",
    }),
    Pet.create({
        image: ["https://i.imgur.com/dsKrt9r.png", "https://i.imgur.com/EYoTdUg.png", "https://i.imgur.com/xWAmMAS.png"],
        type: "plant",
        species: "Azalea",
    }),
])
    return {
        pets
    };
}

module.exports = petSeed;