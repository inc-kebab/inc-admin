import { gql } from '@apollo/client'

export const GET_USER = gql`
  query GetUser($id: Int!) {
    getUser(id: $id) {
      username
      createdAt
      avatars {
        thumbnail {
          url
        }
      }
    }
  }
`
