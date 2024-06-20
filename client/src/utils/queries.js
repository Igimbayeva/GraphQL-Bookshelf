import {gql} from "@apollo/client"

export const GET_ME = gql `
query GetMe {
  getMe {
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