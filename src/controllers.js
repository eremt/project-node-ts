const service = require('./services.js')

module.exports = class Controller {
  static async getBooks (_, res) {
    const books = await service.getBooks()
    res.json(books)
  }
  static async getAuthors (_, res) {
    const authors = await service.getAuthors()
    res.json(authors)
  }
  static async getBooksById (req, res) {
    const { id } = req.params
    const book_id = +id
    const books = await service.getBooksById(book_id)
    res.json(books)
  }
  static async getBooksByAuthorId (req, res) {
    const { id } = req.params
    const author_id = +id
    const books = await service.getBooksByAuthorId(author_id)
    res.json(books)
  }
}
