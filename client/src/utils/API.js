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
    return axios.post("/api/books", bookData);
  },
  searchBookName: function (bookName) {
    return new Promise((resolve, reject) => {
      axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookName)
        .then((res) => {
          resolve(res.data.items.slice(0, 3));
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

  //Challenges
  getChallenges: function () {
    return axios.get("/api/challenges");
  },
  challengesByUser: function (userId) {
    return axios.get("/api/challenges/user/" + userId);
  },
  unsubbedChallengesByUser: function (userId) {
    console.log("We are here!");
    return axios.get("/api/challenges/user/" + userId + "/unsubbed/");
  },
  //Add a challenge to current user's list
};

export default API;