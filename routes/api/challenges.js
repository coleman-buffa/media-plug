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

//Matches wuth "/api/challenges/user/:id"
router
  .route("/user/:id")
  .get(challengesController.challengesByUser);

module.exports = router;