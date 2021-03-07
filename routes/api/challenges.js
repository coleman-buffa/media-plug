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

//Matches with "/api/challenges/user/:id"
router
  .route("/user/:id")
  .get(challengesController.challengesByUser);

//Matches with "/api/challenges/user/:id/unsubbed"
router
  .route("/user/:id/unsubbed")
  .get(challengesController.unsubbedChallengesByUser);

router
  .route("/userchallenge/:userId/:challengeId")
  .post(challengesController.subscribeToChallenge);

module.exports = router;