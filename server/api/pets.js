const router = require("express").Router();
const { User, ToDo, Pet } = require("../db");


router.get("/", async (req, res, next) => {
  try {
    const pets = await Pet.findAll();
    res.json(pets);
  } catch (err) {
    next(err);
  }
});


router.get("/", async (req, res, next) => {
  try {
    const pets = await Pet.findAll({
      include: {
        model: User,
        // as: "owner",
      },
      attributes: [
        `id`,
        `name`,
        `image`,
        `age`,
        `type`,
        `species`,
        `experience`,
      ],
    });
    res.json(pets);
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const pets = await Pet.findAll({
      include: {
        model: User,
        // as: "owner",
      },
      attributes: [`id`,`name`, `image`, `age`, `type`, `species`, `experience`],
    });
    res.json(pets);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const petById = await Pet.findOne({
      where: { id: req.params.id },
      // include: {
      //   model: User,
      //   // as: "owner",
      // },
      // attributes: [`id`,`name`, `image`, `age`, `type`, `species`, `experience`],
    });
    res.json(petById);
  } catch (err) {
    next(err);
  }
});

router.get("/:userId/viewpets", async (req, res, next) => {
  try {
    const petById = await User.findAll({
      where: { id: req.params.userId },
      include: {
        model: Pet,
        // as: "owner",
      },
      // attributes: [`id`,`name`, `image`, `age`, `type`, `species`, `experience`],
    });
    res.json(petById);
  } catch (err) {
    next(err);
  }
});

//vvv will be the finalized api vvv
// router.put("/expUp/:id", async (req, res, next) => {
//   try {
//     const petById = await Pet.findOne({
//       where: { id: req.params.id },
//       include: ToDo,
//     });
//     //Goal is that checking off a ToDo will increase the number of EXP
//     //Amount of EXP gained will depend on the type of ToDo completed
//     if (petById.ToDo.pointType === "important" && petById.ToDo.isCompleted) {
//       const updatedPet = await Pet.update({
//         id: req.body.id,
//         experience: experience + 20,
//       });
//       res.send(updatedPet);
//     }
//     if (petById.ToDo.pointType === "average" && petById.ToDo.isCompleted) {
//       const updatedPet = await Pet.update({
//         id: req.body.id,
//         experience: experience + 10,
//       });
//       res.send(updatedPet);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

//vvv test function to edit experience vvv
router.put("/expUp/:id", async (req, res, next) => {
  try {
    const petById = await Pet.findOne({
      where: { id: req.params.id },
    });
    console.log("This Is Working", petById)
    // const selectPet = petById.id;
    //Goal is that checking off a ToDo will increase the number of EXP
    //Amount of EXP gained will depend on the type of ToDo completed
    const updatedPet = await petById?.update({
      experience: experience + 20,
    });
    res.send(updatedPet);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
