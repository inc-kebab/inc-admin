import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query GetUsers($pageSize: Int, $pageNumber: Int, $searchTerm: String) {
    getUsers(pageSize: $pageSize, pageNumber: $pageNumber, searchTerm: $searchTerm) {
      users {
        username
        id
        fullName
        createdAt
      }
      pagination {
        pagesCount
        pageNumber
        pageSize
        totalCount
      }
    }
  }
`
