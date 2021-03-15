const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router
  .route("/")
  .post(userController.register);

//Matches with "/api/user/:email"
router
  .route('/:email')
  .get(userController.checkUserStatus);

//Matches with "api/user/other/:userId"
router
  .route('/other/:userId')
  .get(userController.getOtherUsers);

module.exports = router;