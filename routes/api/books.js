const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router
  .route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

//Matches with "/api/books/user/:id"
router
  .route("/user/:id")
  .get(booksController.booksByUser);

//Matches with "api/books/user/:id/unread"
router
  .route("/user/:id/unread")
  .get(booksController.unreadBooksByUser);

router
  .route("/userbook/:userId/:bookId")
  .post(booksController.subscribeToBook);

module.exports = router;