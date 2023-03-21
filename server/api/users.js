const router = require("express").Router();
const { User, Pet, ToDo } = require("../db");
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
//Eager load Pet and ToDo models
router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [
        // { model: Pet },
        { model: ToDo },
      ],
    });
    res.json(user);
  } catch (err) {
    console.log("err--->", err);
    next(err);
  }
});

//Get route to get a logged in user's profile w/ their todos
router.get("/profile/me", verifyToken, async (req, res, next) => {
  try {
    const userId = req.payload.id;
    const user = await User.findByPk(userId, {
      include: [{ model: ToDo }],
    });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

//route to edit user information
router.put("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
