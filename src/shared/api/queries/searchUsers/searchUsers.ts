import { gql } from '@apollo/client'

export const GET_USER_BY_NAME = gql`
  query GetUserByName($searchTerm: String!) {
    getUsers(searchTerm: $searchTerm) {
      users {
        id
        fullName
        username
        email
        profile {
          firstname
          lastname
        }
      }
      pagination {
        totalCount
      }
    }
  }
`
