const router = require("express").Router();
const { User, Todo, Pet, SelectPet } = require("../db");

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

//vvv finalized api hidden here vvv
// router.put("/expUp/:selectPetId", async (req, res, next) => {
//   try {
//     const petById = await SelectPet.findOne({
//       where: { id: req.params.selectPetId },
//       include: {all: true, nested: true}
//     });
//     console.log("initial pet:", petById);
//     const todos = await Todo.findAll({
//       where: {userId: req.params.userId}
//     });
//     const petId = petById.id;
//     // const exp = req.body.exp + 20;
//     const checkImg = (exp) => {
//       if (exp >= 90) {
//         return 2;
//       } else if (exp >= 60) {
//         return 1;
//       } else {return 0}
//     };
//     //Goal is that checking off a Todo will increase the number of EXP
//     //Amount of EXP gained will depend on the type of Todo completed
//     if (todos.pointType === "important" && todos.isCompleted) {
//       const updatedPet = await SelectPet.update({
//         id: req.body.id,
//         exp: req.body.exp + 20,
//         selectImg: checkImg(exp)
//       });
//       res.send(updatedPet);
//     }
//     if (todos.pointType === "average" && todos.isCompleted) {
//       const updatedPet = await Pet.update({
//         id: req.body.id,
//         exp: req.body.exp + 20,
//         selectImg: checkImg(exp)
//       });
//       res.send(updatedPet);
//     }
//     const newImg = checkImg(exp);
//     const updatedPet = await petById.update({
//       exp: exp,
//       selectImg: newImg,
//     });
//     console.log("updated pet", updatedPet)
//     res.send(updatedPet);
//   } catch (err) {
//     console.log(err);
//   }
// });

//vvv temporary test expUp vvv
router.put("/expUp/:selectPetId", async (req, res, next) => {
  try {
    const petById = await SelectPet.findOne({
      where: { id: req.params.selectPetId },
      include: {all: true,}
    });
    const exp = req.body.exp + 20;
    const checkImg = (exp) => {
      if (exp >= 90) {
        return 2;
      } else if (exp >= 60) {
        return 1;
      } else {return 0}
    };
    const newImg = checkImg(exp);
    const updatedPet = await petById.update({
      exp: exp,
      selectImg: newImg,
    });
    res.send(updatedPet);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
