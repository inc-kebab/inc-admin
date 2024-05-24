import { gql } from '@apollo/client'

export const GET_USER = gql`
  query GetUser($id: Int!) {
    getUser(id: $id) {
      username
      firstname
      lastname
      createdAt
      avatars {
        thumbnail {
          url
        }
      }
    }
  }
`
