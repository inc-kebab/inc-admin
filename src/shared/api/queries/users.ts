import { gql } from '@apollo/client'

export const GET_USER_BY_ID = gql`
  query GetUser($id: Int!) {
    getUser(id: $id) {
      firstname
      lastname
      aboutMe
    }
  }
`
