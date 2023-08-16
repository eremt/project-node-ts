import books from '../data/books.json'
import authors from '../data/authors.json'

export default class Service {
  static async getBooks () {
    return books
  }
  static async getAuthors () {
    return authors
  }
  static async getBooksById (book_id: number) {
    return books.filter((b: any) => b.id === book_id)
  }
  static async getBooksByAuthorId (author_id: number) {
    return books.filter((b: any) => b.author_id === author_id)
  }
}
