import axios from "axios";

const API = {
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
  }
};

export default API;