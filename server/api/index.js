//main entry point for server/api
//mounts all routes on /api + path
const router = require("express").Router();

router.use('/users', require('./users'))
router.use('/pets', require('./pets'))
router.use("/todos", require("./todos"));
// router.use('/openapi', require('./openapi'))

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;
