const router = require('express').Router()
const { models: { User, Pet, ToDo }} = require('../db')
module.exports = router

//Get route for all users 
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      /* Explicitly select only the id and username fields - even though users' passwords are encrypted, will only send attributes */
      attributes: ['id', 'username']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

//Get route for single user
//Eager load Pet and ToDo models
router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [{ model: Pet }, { model: ToDo }],
    });
    res.json(user);
  } catch (err) {
    next(err);
  }
});