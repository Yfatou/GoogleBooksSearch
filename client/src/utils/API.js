import axios from "axios";

export default {
    // Gets all books
    getBooks: function() {
        return axios.get("/api/books");
    },
    // Search book
    searchBooks: function(title) {
        return axios.post("/search" + title)
    },
    // Saves a book to the database
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
};
