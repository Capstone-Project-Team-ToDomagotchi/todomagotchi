const { Pet } = require('../server/db');

async function petSeed() {
const pets = await Promise.all([
    Pet.create({
        image: ["/pictures/monsterfirstform.png", "/pictures/brontosaurusform2.png", "/pictures/brontosaurusform3.png"],
        type: "monster",
        species: "Brontosaurus",
    }),
    Pet.create({
        image: ["/pictures/monsterfirstform.png", "/pictures/tiphinxform2.png", "/pictures/tiphinxform3.png"],
        type: "monster",
        species: "Tiphinx",
    }),
    Pet.create({
        image: ["/pictures/monsterfirstform.png", "/pictures/koiform2.png", "/pictures/koiform3.png"],
        type: "monster",
        species: "Koi",
    }),
    Pet.create({
        image: ["/pictures/plantfirstform.png", "/pictures/monsteraform2.png", "/pictures/monsteraform3.png"],
        type: "plant",
        species: "Monstera",
    }),
    Pet.create({
        image: ["/pictures/plantfirstform.png", "/pictures/azaleaform2.png", "/pictures/azaleaform3.png"],
        type: "plant",
        species: "Azalea",
    }),
])
    return {
        pets
    };
}

module.exports = petSeed;