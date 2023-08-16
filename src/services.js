const books = require('../data/books.json')
const authors = require('../data/authors.json')

module.exports = class Service {
  static async getBooks () {
    return books
  }
  static async getAuthors () {
    return authors
  }
  static async getBooksById (book_id) {
    return books.filter(b => b.id === book_id)
  }
  static async getBooksByAuthorId (author_id) {
    return books.filter(b => b.author_id === author_id)
  }
}
