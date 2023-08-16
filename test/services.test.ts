import services from '../src/services'
import books from '../data/books.json'
import authors from '../data/authors.json'

test('get books', async () => {
  expect(await services.getBooks()).toBe(books)
})
test('get authors', async () => {
  expect(await services.getAuthors()).toBe(authors)
})
test('get books by id', async () => {
  const [ book ] = await services.getBooksById(1)
  expect(book).toBe(books[1])
})
test('get books by author id', async () => {
  const [ book ] = await services.getBooksByAuthorId(1)
  expect(book).toBe(books[2])
})
