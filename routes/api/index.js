const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./user");
const challengeRoutes = require("./challenges");

// Book routes
router.use("/books", bookRoutes);

router.use("/user", userRoutes);

router.use("/challenges", challengeRoutes);

module.exports = router;