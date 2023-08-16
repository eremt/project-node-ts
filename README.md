# project-ts
Simple TypeScript starter project.

## Features
- `docker` and `docker-compose`

## Documentation

### Development

Clone the repository:
```
git clone https://github.com/eremt/project-node-ts.git
```

Start the development environment:
```
docker-compose up
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
