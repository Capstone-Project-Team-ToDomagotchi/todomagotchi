const { faker } = require('@faker-js/faker');
const { Pet } = require('../server/db');

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