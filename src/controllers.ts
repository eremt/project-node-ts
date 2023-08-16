import { Request, Response } from 'express'
import service from './services'

export default class Controller {
  static async getBooks (_: Request, res: Response) {
    const books = await service.getBooks()
    res.json(books)
  }
  static async getAuthors (_: Request, res: Response) {
    const authors = await service.getAuthors()
    res.json(authors)
  }
  static async getBooksById (req: Request, res: Response) {
    const { id } = req.params
    const book_id = +id
    const books = await service.getBooksById(book_id)
    res.json(books)
  }
  static async getBooksByAuthorId (req: Request, res: Response) {
    const { id } = req.params
    const author_id = +id
    const books = await service.getBooksByAuthorId(author_id)
    res.json(books)
  }
}
