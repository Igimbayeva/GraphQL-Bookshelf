import {gql} from "@apollo/client"


export const LOGIN_USER = gql `
mutation Mutation($password: String!, $username: String, $email: String) {
  login(password: $password, username: $username, email: $email) {
    token
    user {
      email
      username
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
    }
  }
}
`
export const CREATE_USER = gql `
mutation Mutation($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) {
    token
    user {
      email
      username
    }
  }
}
`
export const SAVE_BOOK = gql `
mutation Mutation($bookId: String, $authors: [String], $description: String, $image: String, $link: String, $title: String) {
  save(bookId: $bookId, authors: $authors, description: $description, image: $image, link: $link, title: $title) {
    email
    savedBooks {
      title
      link
      image
      description
      bookId
      authors
    }
    username
  }
}
`
export const DELETE_BOOK = gql `
mutation Mutation($bookId: String!) {
  delete(bookId: $bookId) {
    email
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
    username
  }
}
`