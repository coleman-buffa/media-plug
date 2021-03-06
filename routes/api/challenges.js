const router = require("express").Router();
const challengesController = require("../../controllers/challengesController");

// Matches with "/api/challenges"
router
  .route("/")
  .get(challengesController.findAll)
  .post(challengesController.create);

// Matches with "/api/challenges/:id"
router
  .route("/:id")
  .get(challengesController.findById)
  .put(challengesController.update)
  .delete(challengesController.remove);

module.exports = router;