const router = require("express").Router();
const { User, Pet, Todo, SelectPet } = require("../db");
const verifyToken = require("../middleware/verifyToken");

//Get route for all users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      /* Explicitly select only the id and username fields - even though users' passwords are encrypted, will only send attributes */
      attributes: ["id", "username"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

//Get route for single user
//Eager load Pet and Todo models
router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: {all: true},
    });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

//Get route to get a logged in user's profile w/ their todos
router.get("/profile/me", verifyToken, async (req, res, next) => {
  try {
    const userId = req.payload.id;
    const user = await User.findByPk(userId, {
      attributes: ["id", "username", "displayName", "pronouns", "profilePic"],
    });
    const userPets = await SelectPet.findAll({
      where: { userId },
      include: [{ model: Pet, attributes: ["id", "image", "type", "species"] }],
      attributes: {
        exclude: [
          "id",
          "exp",
          "name",
          "age",
          "petId",
          "userId",
          "todoId",
          "createdAt",
          "updatedAt",
        ],
      },
    });
    const userTodos = await SelectPet.findAll({
      where: { userId },
      include: [
        {
          model: Todo,
          attributes: {
            exclude: ["createdAt", "updatedAt", "petId", "userId"],
          },
        },
      ],
      attributes: {
        exclude: [
          "id",
          "exp",
          "name",
          "age",
          "petId",
          "userId",
          "todoId",
          "createdAt",
          "updatedAt",
        ],
      },
    });
    res.json({ user, userPets, userTodos });
  } catch (err) {
    next(err);
  }
});

//Put route to edit user information
router.put("/:id", async (req, res, next) => {
  try {
    const { username, displayName, pronouns, aboutMe } = req.body;
    const editUser = await User.findByPk(req.params.id);
    res.send(
      await editUser.update({ username, displayName, pronouns, aboutMe })
    );
  } catch (err) {
    next(err);
  }
});

//Post route for user to select a new pet
router.post("/:id/selectpet", async (req, res) => {
  try {
    let selectPet = await SelectPet.create({
      name: req.body.name,
      userId: req.body.userId,
      petId: req.body.petId,
      include: { model: User, Pet },
    });
    console.log(selectPet);
    res.json(selectPet);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});
router.get("/:userId/selectedpet", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId);

    res.json(user.selectPet);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
