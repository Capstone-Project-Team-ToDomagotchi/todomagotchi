//API routes for todos - mounted on /api/todos
const express = require("express");
const router = express.Router();
const { Todo, User, SelectPet } = require("../db");

//get all todos
router.get("/", async (req, res, next) => {
  try {
    const todos = await Todo.findAll({
      order: [["updatedAt", "DESC"]],
      include: { all: true },
    });
    res.json(todos);
  } catch (err) {
    next(err);
  }
});

//add a new todo
router.post("/addNewTodo", async (req, res) => {
  const { userId, dueDate, todoName, description, pointType } = req.body;

  try {
    const newTodo = new Todo({
      userId,
      dueDate,
      todoName,
      description,
      pointType,
      isCompleted: false,
      include: [{ model: SelectPet }, { model: User }],
    });

    await newTodo.save();

    res.json(newTodo);
  } catch (error) {
    console.error(error);
  }
});

//get a single todo
router.get("/:id", async (req, res, next) => {
  try {
    const todo = await Todo.findByPk(req.params.id, {
      include: [{ model: User }],
    });
    res.json(todo);
  } catch (err) {
    next(err);
  }
});

//update or edit a todo
router.put("/:id", async (req, res, next) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    res.send(await todo.update(req.body));
  } catch (err) {
    next(err);
  }
});

//delete a todo
router.delete("/:id", async (req, res, next) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    await todo.destroy();
    res.send(todo);
  } catch (err) {
    next(err);
  }
});

//update a todo when toggled as "completed"
router.put("/:id/toggle", async (req, res, next) => {
  try {
    const todo = await Todo.findByPk(req.params.id, {
      include: { all: true, nested: true },
    });
    console.log(todo);
    if (!todo) {
      return res.status(404).send("Todo not found");
    }
    const users = await todo.getUser({ include: { all: true, nested: true } });
    const selectedPet = users.selectPets?.[0];
    console.log("exp", selectedPet.exp);
    // if (todo.pointType === "important" && todo.isCompleted){
    //   selectedPet.setExp(exp + 20);
    // }
    // if (todo.pointType === "average" && todo.isCompleted){
    //   selectedPet.setExp(exp + 10);
    // }
    selectedPet.exp = selectedPet.exp + 10;
    const updatedTodo = await todo.update({
      isCompleted: req.body.isCompleted,
    });
    const checkTodo = (todo) => {
      if (todo.pointType === "important" && todo.isCompleted) {
        return selectedPet.increment({ exp: 20 });
      }
      if (todo.pointType === "average" && todo.isCompleted) {
        return selectedPet.increment({ exp: 10 });
      } else {
        return selectedPet;
      }
    };
    //fetched the correct todo
    //need to fetch the user who owns the todo
    //when user is selected, get the user's select pet
    //then use the selectPet's instance method to update its exp
    //instance method to the selectPet model
    //it is when the todo is toggled that the pet gains EXP
    //will not need the checkImg function once model is updated to reflect
    //will not need selectpet.update method because the instance method will handle that
    //selectedPet.increaseExp(20) = should be all you need
    res.json(checkTodo(updatedTodo));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
