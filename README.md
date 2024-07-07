# GRAPHQL-BOOKSHELF

## Description

GRAPHQL-BOOKSHELF is a modern book search engine that leverages the power of GraphQL and Apollo Server to provide a seamless and efficient user experience.<br>
Built using the MERN stack (MongoDB, Express.js, React, Node.js), this application allows users to search for books via the Google Books API, save their favorite books, and manage their saved books.<br>
This project refactors a previously RESTful API-based application to utilize GraphQL for data fetching and mutations.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Screenshots](#screenshots)
- [Links](#links)

## Installation

To set up this project locally, follow these steps:

1. **Clone the Repository**
    ```bash
    git clone https://github.com/Igimbayeva/GraphQL-Bookshelf.git
    cd GRAPHQL-BOOKSHELF
    ```

2. **Install Dependencies**
    ```bash
    npm install
    cd client
    npm install
    cd ..
    ```

3. **Set Up Environment Variables**

    Create a `.env` file in the root directory and add the following:

    ```env
    MONGODB_URI=your-mongodb-uri
    JWT_SECRET=your-secret-key
    GOOGLE_BOOKS_API_KEY=your-google-books-api-key
    ```

4. **Run the Application**
    ```bash
    npm start
    ```

## Usage

Once the application is running, you can:

- Search for books using the search bar.
- Sign up or log in to save your favorite books.
- View your saved books in your personal library.
- Remove books from your saved list.

## Features

- **GraphQL API**: Efficient data querying and manipulation.
- **User Authentication**: Secure login and signup using JWT.
- **Book Search**: Search for books using the Google Books API.
- **Save Books**: Save books to your personal library.
- **Manage Saved Books**: View and remove books from your saved list.

## Deployment

The application is deployed on Render with MongoDB Atlas as the database service. You can access the live application at the following URL:

[GRAPHQL-BOOKSHELF on Render](https://graphql-bookshelf.render.com)

## Technologies Used

- **Frontend**: React, Apollo Client, Chakra UI
- **Backend**: Node.js, Express.js, Apollo Server, MongoDB, Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **API**: Google Books API

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Google Books API](https://developers.google.com/books)
- [Apollo GraphQL](https://www.apollographql.com/)
- [MERN Stack](https://www.mongodb.com/mern-stack)

## Screenshots

![Search Page](https://github.com/Igimbayeva/GraphQL-Bookshelf/blob/main/assets/screenshot1.PNG?raw=true)
*Search for books using the Google Books API.*

![Saved Books](https://github.com/Igimbayeva/GraphQL-Bookshelf/blob/main/assets/screenshot2.PNG?raw=true)
*View and manage your saved books.*

## Links

- **Repository**: [GRAPHQL-BOOKSHELF GitHub](https://github.com/Igimbayeva/GraphQL-Bookshelf)
- **Live Application**: [GRAPHQL-BOOKSHELF on Render](https://graphql-bookshelf.render.com)

