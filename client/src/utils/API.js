import axios from "axios";

const API = {
  //Books
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    console.log(bookData);
    return axios.post("/api/books", bookData);
  },
  searchBookName: function (bookName) {
    return new Promise((resolve, reject) => {
      let tempArray = [];
      axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookName)
        .then((res) => {
          tempArray = res.data.items.filter(book => {
            return book.volumeInfo.title && book.volumeInfo.authors &&
              book.volumeInfo.description && book.volumeInfo.imageLinks &&
              book.volumeInfo.categories && book.volumeInfo.pageCount &&
              book.volumeInfo.averageRating && book.volumeInfo.publishedDate
          })
          resolve(tempArray);
        }).catch((err) => reject(err));
    })
  },
  //Check with instructors re: is this a book or user route for org purposes
  booksByUser: function (userId) {
    return axios.get("/api/books/user/" + userId);
  },
  unreadBooksByUser: function (userId) {
    return axios.get("/api/books/user/" + userId + "/unread/");
  },

  //////////////
  //User
  checkUser: function (email) {
    return axios.get("/api/user/" + email);
  },
  createUser: function (userInfo) {
    return axios.post("/api/user/", userInfo);
  },


  //////////////
  // Challenges
  getChallenges: function () {
    return axios.get("/api/challenges");
  },
  challengesByUser: function (userId) {
    return axios.get("/api/challenges/user/" + userId);
  },
  unsubbedChallengesByUser: function (userId) {
    return axios.get("/api/challenges/user/" + userId + "/unsubbed/");
  },
  saveChallenge: function (challengeData) {
    return axios.post("api/challenges/", challengeData);
  },
  //Add a challenge to current user's list


  //////////////
  // UserBook
  saveUserBook: function (userId, bookId) {
    return axios.post("/api/books/userbook/" + userId + "/" + bookId);
  },

  //////////////
  // UserChallenge
  saveUserChallenge: function (userId, challengeId) {
    return axios.post("api/challenges/userchallenge/" + userId + "/" + challengeId);
  }
};

export default API;