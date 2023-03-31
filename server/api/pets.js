//API routes for pets - mounted on /api/pets
const router = require("express").Router();
const { Pet, SelectPet } = require("../db");

//get all pets
router.get("/", async (req, res, next) => {
  try {
    const pets = await Pet.findAll({
      include: {
        all: true,
      },
    });
    res.json(pets);
  } catch (err) {
  next(err);
  }
  });

//get a pet by id
router.get("/:id", async (req, res, next) => {
  try {
    const petById = await SelectPet.findOne({
      where: { id: req.params.id },
      include: {
        all: true, 
      },
    });
    res.json(petById);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
