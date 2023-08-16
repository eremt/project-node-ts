# project-ts
Simple TypeScript starter project.

## Features
- `docker` and `docker-compose`
- `jest`
- `sqlite3`: [`feat/sqlite3`](https://github.com/eremt/project-node-ts/tree/feat/sqlite3)

## Documentation

### Development

Clone the repository:
```
git clone https://github.com/eremt/project-node-ts.git
```

Copy `.env.example` to create `.env`:
```
cp .env.example .env
```

Start the development environment with `nodemon` watching for changes:
```
docker-compose up
```

Run tests:
```
npm run test
```

### API

There's a simple API with books and authors to get started.

The following endpoints exist:

`GET /authors`: List authors
```
[
  {
    id: number,
    firstname: string,
    lastname: string,
  },
  ...
]
```

`GET /books`: List books

`GET /books/id/:book_id`: List books by `book_id`

`GET /books/author/:author_id`: List books by `author_id`
```
[
  {
    id: number,
    title: string,
    author_id: number,
  },
  ...
]
```

### Troubleshooting
