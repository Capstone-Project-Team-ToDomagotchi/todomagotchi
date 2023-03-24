const router = require("express").Router();
const { User, Todo, Pet, SelectPet } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const pets = await Pet.findAll({
      include: {
        all: true,
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

router.get("/:userId/viewpets", async (req, res, next) => {
  try {
    const petById = await User.findAll({
      where: { id: req.params.userId },
      include: {
        all: true,
      },
    });
    console.log(petById);
    res.json(petById);
  } catch (err) {
    next(err);
  }
});

//vvv will be the finalized api vvv
router.put("/expUp/:selectPetId", async (req, res, next) => {
  try {
    // const petById = await Pet.findOne({
    //   where: { id: req.params.id },
    //   include: SelectPet,
    // });
    const petById = await SelectPet.findOne({
      where: { id: req.params.selectPetId },
    });
    console.log("initial pet:", petById);
    // const todos = await Todo.findAll({
    //   where: {id: req.params.selectPetId}
    // });
    const petId = petById.id;
    const exp = req.body.exp + 20;
    const checkImg = (exp) => {
      if (exp >= 90) {
        return 2;
      } else if (exp >= 60) {
        return 1;
      } else {return 0}
    };
    // //Goal is that checking off a Todo will increase the number of EXP
    // //Amount of EXP gained will depend on the type of Todo completed
    // // if (petById.Todo.pointType === "important" && petById.Todo.isCompleted) {
    // //   const updatedPet = await SelectPet.update({
    // //     id: req.body.id,
    // //     exp: exp + 20,
    // //     selectImg: checkImg(exp)
    // //   });
    // //   res.send(updatedPet);
    // // }
    // // if (petById.ToDo.pointType === "average" && petById.Todo.isCompleted) {
    // //   const updatedPet = await Pet.update({
    // //     id: req.body.id,
    // //     experience: experience + 10,
    // //   });
    // //   res.send(updatedPet);
    // // }
    const newImg = checkImg(exp);
    const updatedPet = await petById.update({
      exp: exp,
      selectImg: newImg,
    });
    console.log("updated pet", updatedPet)
    res.send(updatedPet);
  } catch (err) {
    console.log(err);
  }
});

//vvv test function to edit experience vvv
router.put("/expUp/:id", async (req, res, next) => {
  try {
    const petById = await Pet.findOne({
      where: { id: req.params.id },
    });
    console.log("This Is Working", petById);
    const selectPet = petById.id;
    //Goal is that checking off a Todo will increase the number of EXP
    //Amount of EXP gained will depend on the type of Todo completed
    const updatedPet = await petById.update({
      id: selectPet,
      exp: selectPet.exp + 20,
    });
    res.send(updatedPet);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
